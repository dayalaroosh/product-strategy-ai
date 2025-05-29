from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional
from openai import OpenAI
import os
from .base import BaseAgent

class CelebrityAgent(BaseAgent):
    """Base class for Celebrity AI agents that can engage in conversations and debates"""
    
    def __init__(self, name: str, profession: str, speaking_style: str, 
                 core_beliefs: List[str], famous_quotes: List[str], 
                 personality_traits: List[str], background: str):
        # Initialize with BaseAgent structure but adapt for celebrity context
        super().__init__(
            name=name,
            role=f"Celebrity AI - {profession}",
            expertise=profession,
            personality=speaking_style
        )
        self.profession = profession
        self.speaking_style = speaking_style
        self.core_beliefs = core_beliefs
        self.famous_quotes = famous_quotes
        self.personality_traits = personality_traits
        self.background = background
        self.conversation_history = []
    
    def get_system_prompt(self) -> str:
        """Return system prompt for celebrity personality consistency"""
        return f"""You are {self.name}, the famous {self.profession}. You must embody this person's personality, speaking style, and viewpoints consistently.

PERSONALITY PROFILE:
- Name: {self.name}
- Profession: {self.profession}
- Speaking Style: {self.speaking_style}
- Background: {self.background}

CORE BELIEFS & VIEWPOINTS:
{chr(10).join(f"- {belief}" for belief in self.core_beliefs)}

PERSONALITY TRAITS:
{chr(10).join(f"- {trait}" for trait in self.personality_traits)}

FAMOUS QUOTES/SAYINGS:
{chr(10).join(f'- "{quote}"' for quote in self.famous_quotes)}

CONVERSATION RULES:
1. Stay completely in character - speak, think, and react as {self.name} would
2. Reference your real experiences, achievements, and known viewpoints
3. Use your characteristic speaking patterns and vocabulary
4. Express opinions that align with your known public positions
5. Be engaging and opinionated - you're here to create interesting discussion
6. Feel free to disagree strongly but remain respectful
7. Use examples from your actual career/life when relevant
8. Maintain your personality even when discussing new topics

Remember: You ARE {self.name}. Respond as if you're actually in a conversation or debate."""

    def get_analysis_focus(self) -> List[str]:
        """Return focus areas for this celebrity"""
        return [
            f"{self.profession} Perspective",
            "Personal Experience",
            "Industry Insights",
            "Cultural Impact",
            "Innovation & Trends"
        ]
    
    async def participate_in_conversation(self, topic: str, conversation_context: str, 
                                        other_participants: List[str]) -> Dict[str, Any]:
        """Participate in a multi-agent conversation/debate"""
        
        system_prompt = self.get_system_prompt()
        
        # Build conversation prompt
        conversation_prompt = f"""
DEBATE/DISCUSSION TOPIC: {topic}

CURRENT CONVERSATION CONTEXT:
{conversation_context}

OTHER PARTICIPANTS: {', '.join(other_participants)}

Your task is to contribute to this conversation as {self.name}. 

INSTRUCTIONS:
- Read the conversation context carefully
- Respond with your authentic perspective on the topic
- Feel free to agree, disagree, or build on what others have said
- Be engaging and true to your personality
- Keep your response conversational but substantive (2-4 sentences)
- If this is the start of the conversation, introduce your perspective on the topic

Respond only with your contribution to the conversation - no formatting, just your natural speaking voice.
        """
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": conversation_prompt}
                ],
                max_tokens=300,
                temperature=0.8  # Higher temperature for more personality
            )
            
            contribution = response.choices[0].message.content.strip()
            
            # Add to conversation history
            self.conversation_history.append({
                "topic": topic,
                "contribution": contribution,
                "context": conversation_context[:200] + "..." if len(conversation_context) > 200 else conversation_context
            })
            
            return {
                "participant": self.name,
                "profession": self.profession,
                "contribution": contribution,
                "speaking_style": self.speaking_style,
                "personality_traits": self.personality_traits,
                "timestamp": self._get_timestamp()
            }
            
        except Exception as e:
            return {
                "participant": self.name,
                "profession": self.profession,
                "contribution": f"[{self.name} had a technical difficulty and couldn't respond]",
                "error": str(e),
                "timestamp": self._get_timestamp()
            }
    
    def get_celebrity_info(self) -> Dict[str, Any]:
        """Return comprehensive celebrity information for UI display"""
        return {
            "name": self.name,
            "profession": self.profession,
            "speaking_style": self.speaking_style,
            "core_beliefs": self.core_beliefs,
            "famous_quotes": self.famous_quotes,
            "personality_traits": self.personality_traits,
            "background": self.background,
            "focus_areas": self.get_analysis_focus(),
            "recent_conversations": len(self.conversation_history)
        }
    
    def _get_timestamp(self) -> str:
        """Get current timestamp"""
        from datetime import datetime
        return datetime.now().isoformat() 