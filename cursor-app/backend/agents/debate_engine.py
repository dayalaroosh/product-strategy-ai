from typing import Dict, List, Any, Optional
import asyncio
from datetime import datetime
import json

from .celebrities.elon_musk import ElonMuskAgent
from .celebrities.steve_jobs import SteveJobsAgent
from .celebrities.warren_buffett import WarrenBuffettAgent
from .celebrities.oprah_winfrey import OprahWinfreyAgent
from .celebrities.gordon_ramsay import GordonRamsayAgent

class DebateEngine:
    """Orchestrates conversations and debates between celebrity AI agents"""
    
    def __init__(self):
        self.celebrities = {
            "elon_musk": ElonMuskAgent(),
            "steve_jobs": SteveJobsAgent(),
            "warren_buffett": WarrenBuffettAgent(),
            "oprah_winfrey": OprahWinfreyAgent(),
            "gordon_ramsay": GordonRamsayAgent()
        }
        self.active_conversations = {}
        self.conversation_history = []
    
    def get_available_celebrities(self) -> Dict[str, Any]:
        """Get all available celebrity agents and their info"""
        return {
            celebrity_id: agent.get_celebrity_info() 
            for celebrity_id, agent in self.celebrities.items()
        }
    
    def get_celebrity_by_id(self, celebrity_id: str):
        """Get a specific celebrity agent by ID"""
        return self.celebrities.get(celebrity_id)
    
    async def start_conversation(self, topic: str, participant_ids: List[str], 
                               conversation_style: str = "debate") -> Dict[str, Any]:
        """Start a new conversation/debate between selected celebrities"""
        
        # Validate participants
        participants = []
        for pid in participant_ids:
            if pid in self.celebrities:
                participants.append(self.celebrities[pid])
            else:
                return {"error": f"Celebrity '{pid}' not found"}
        
        if len(participants) < 2:
            return {"error": "At least 2 participants required for a conversation"}
        
        # Create conversation ID
        conversation_id = f"conv_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        # Initialize conversation
        conversation = {
            "id": conversation_id,
            "topic": topic,
            "style": conversation_style,
            "participants": [p.name for p in participants],
            "participant_ids": participant_ids,
            "messages": [],
            "status": "active",
            "created_at": datetime.now().isoformat(),
            "rounds": 0,
            "max_rounds": 6  # Limit to prevent endless conversations
        }
        
        self.active_conversations[conversation_id] = conversation
        
        return {
            "conversation_id": conversation_id,
            "topic": topic,
            "participants": [p.name for p in participants],
            "status": "started",
            "message": f"Started {conversation_style} on '{topic}' with {len(participants)} participants"
        }
    
    async def add_conversation_round(self, conversation_id: str) -> Dict[str, Any]:
        """Add a new round to an existing conversation"""
        
        if conversation_id not in self.active_conversations:
            return {"error": "Conversation not found"}
        
        conversation = self.active_conversations[conversation_id]
        
        if conversation["status"] != "active":
            return {"error": "Conversation is not active"}
        
        if conversation["rounds"] >= conversation["max_rounds"]:
            conversation["status"] = "completed"
            return {"error": "Conversation has reached maximum rounds", "status": "completed"}
        
        # Build conversation context from previous messages
        context = self._build_conversation_context(conversation["messages"])
        
        # Get participants for this round
        participants = [self.celebrities[pid] for pid in conversation["participant_ids"]]
        participant_names = [p.name for p in participants]
        
        # Collect responses from all participants concurrently
        tasks = []
        for participant in participants:
            task = participant.participate_in_conversation(
                topic=conversation["topic"],
                conversation_context=context,
                other_participants=[p.name for p in participants if p.name != participant.name]
            )
            tasks.append(task)
        
        # Execute all participant responses concurrently
        try:
            responses = await asyncio.gather(*tasks)
            
            # Add responses to conversation
            round_number = conversation["rounds"] + 1
            round_messages = []
            
            for response in responses:
                message = {
                    "round": round_number,
                    "participant": response["participant"],
                    "profession": response["profession"],
                    "content": response["contribution"],
                    "timestamp": response["timestamp"],
                    "speaking_style": response.get("speaking_style", ""),
                    "personality_traits": response.get("personality_traits", [])
                }
                conversation["messages"].append(message)
                round_messages.append(message)
            
            conversation["rounds"] = round_number
            
            # Check if conversation should end
            if round_number >= conversation["max_rounds"]:
                conversation["status"] = "completed"
            
            return {
                "conversation_id": conversation_id,
                "round": round_number,
                "messages": round_messages,
                "status": conversation["status"],
                "total_rounds": conversation["rounds"],
                "topic": conversation["topic"]
            }
            
        except Exception as e:
            return {
                "error": f"Failed to generate conversation round: {str(e)}",
                "conversation_id": conversation_id
            }
    
    def get_conversation(self, conversation_id: str) -> Dict[str, Any]:
        """Get a specific conversation by ID"""
        if conversation_id not in self.active_conversations:
            return {"error": "Conversation not found"}
        
        return self.active_conversations[conversation_id]
    
    def get_recent_conversations(self, limit: int = 10) -> List[Dict[str, Any]]:
        """Get recent conversations for the trending/discovery section"""
        conversations = list(self.active_conversations.values())
        conversations.sort(key=lambda x: x["created_at"], reverse=True)
        
        # Return summary info for trending
        trending = []
        for conv in conversations[:limit]:
            trending.append({
                "id": conv["id"],
                "topic": conv["topic"],
                "participants": conv["participants"],
                "status": conv["status"],
                "rounds": conv["rounds"],
                "created_at": conv["created_at"],
                "preview": self._get_conversation_preview(conv)
            })
        
        return trending
    
    def _build_conversation_context(self, messages: List[Dict[str, Any]]) -> str:
        """Build conversation context from previous messages"""
        if not messages:
            return "This is the start of the conversation."
        
        context_parts = []
        for msg in messages[-6:]:  # Last 6 messages for context
            context_parts.append(f"{msg['participant']}: {msg['content']}")
        
        return "\n\n".join(context_parts)
    
    def _get_conversation_preview(self, conversation: Dict[str, Any]) -> str:
        """Get a preview snippet of the conversation"""
        if not conversation["messages"]:
            return f"Upcoming {conversation['style']} on {conversation['topic']}"
        
        last_message = conversation["messages"][-1]
        preview = last_message["content"][:100]
        if len(last_message["content"]) > 100:
            preview += "..."
        
        return f"{last_message['participant']}: {preview}"
    
    def generate_social_media_content(self, conversation_id: str) -> Dict[str, Any]:
        """Generate shareable social media content from a conversation"""
        if conversation_id not in self.active_conversations:
            return {"error": "Conversation not found"}
        
        conversation = self.active_conversations[conversation_id]
        
        if not conversation["messages"]:
            return {"error": "No content available for sharing"}
        
        # Find the most engaging exchanges
        highlights = []
        for i, msg in enumerate(conversation["messages"]):
            if len(msg["content"]) > 50:  # Substantial content
                highlights.append({
                    "participant": msg["participant"],
                    "content": msg["content"],
                    "round": msg["round"]
                })
        
        # Generate different social media formats
        content = {
            "conversation_id": conversation_id,
            "topic": conversation["topic"],
            "participants": conversation["participants"],
            "formats": {
                "twitter_thread": self._generate_twitter_thread(conversation, highlights),
                "instagram_quote": self._generate_instagram_quote(highlights),
                "linkedin_post": self._generate_linkedin_post(conversation, highlights),
                "tiktok_script": self._generate_tiktok_script(conversation, highlights)
            },
            "hashtags": self._generate_hashtags(conversation),
            "generated_at": datetime.now().isoformat()
        }
        
        return content
    
    def _generate_twitter_thread(self, conversation: Dict[str, Any], highlights: List[Dict[str, Any]]) -> List[str]:
        """Generate Twitter thread from conversation highlights"""
        thread = []
        
        # Opening tweet
        participants_str = " vs ".join(conversation["participants"])
        thread.append(f"🔥 {participants_str} debate: {conversation['topic']}\n\nThread of the best exchanges 👇")
        
        # Add highlights
        for i, highlight in enumerate(highlights[:4]):  # Max 4 highlights
            tweet = f"{i+2}/ {highlight['participant']}: \"{highlight['content'][:200]}\""
            if len(highlight['content']) > 200:
                tweet += "...\""
            thread.append(tweet)
        
        return thread
    
    def _generate_instagram_quote(self, highlights: List[Dict[str, Any]]) -> Dict[str, str]:
        """Generate Instagram quote post"""
        if not highlights:
            return {"quote": "Stay tuned for epic debates!", "author": "AI Debate"}
        
        best_highlight = max(highlights, key=lambda x: len(x["content"]))
        return {
            "quote": f'"{best_highlight["content"][:150]}"',
            "author": best_highlight["participant"],
            "design_suggestion": "Bold text on gradient background"
        }
    
    def _generate_linkedin_post(self, conversation: Dict[str, Any], highlights: List[Dict[str, Any]]) -> str:
        """Generate professional LinkedIn post"""
        participants_str = ", ".join(conversation["participants"])
        
        post = f"💡 Fascinating insights from today's AI debate on {conversation['topic']}\n\n"
        post += f"Key perspectives from {participants_str}:\n\n"
        
        for highlight in highlights[:2]:  # Top 2 insights
            post += f"🔹 {highlight['participant']}: {highlight['content'][:150]}\n\n"
        
        post += "What's your take on this topic? Share your thoughts below! 👇\n\n"
        post += "#AI #Debate #Innovation #Leadership"
        
        return post
    
    def _generate_tiktok_script(self, conversation: Dict[str, Any], highlights: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Generate TikTok video script"""
        return {
            "hook": f"What happens when {conversation['participants'][0]} debates {conversation['participants'][1]}?",
            "setup": f"Topic: {conversation['topic']}",
            "highlights": [
                {
                    "scene": f"Scene {i+1}",
                    "speaker": h["participant"],
                    "text": h["content"][:100] + "..." if len(h["content"]) > 100 else h["content"],
                    "visual_cue": f"Show {h['participant']} avatar"
                }
                for i, h in enumerate(highlights[:3])
            ],
            "cta": "Follow for more AI celebrity debates!"
        }
    
    def _generate_hashtags(self, conversation: Dict[str, Any]) -> List[str]:
        """Generate relevant hashtags for social media"""
        base_tags = ["#AIDebate", "#Celebrity", "#Viral"]
        
        # Add participant-specific tags
        participant_tags = []
        for participant in conversation["participants"]:
            name_tag = "#" + participant.replace(" ", "")
            participant_tags.append(name_tag)
        
        # Add topic-related tags
        topic_words = conversation["topic"].split()
        topic_tags = [f"#{word.capitalize()}" for word in topic_words if len(word) > 3]
        
        all_tags = base_tags + participant_tags + topic_tags[:3]  # Limit topic tags
        return all_tags[:10]  # Max 10 hashtags 