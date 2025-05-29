from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from openai import OpenAI
import json
import re
import asyncio
from agents.council import ProductStrategyCouncil
from agents.debate_engine import DebateEngine

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Initialize Product Strategy Council
council = ProductStrategyCouncil()

# Initialize Debate Engine
debate_engine = DebateEngine()

def extract_json_from_response(response_text):
    """Extract JSON from OpenAI response that might have markdown formatting"""
    try:
        # First, try direct JSON parsing
        return json.loads(response_text)
    except json.JSONDecodeError:
        pass
    
    # Try to extract JSON from markdown code blocks
    json_match = re.search(r'```(?:json)?\s*(\{.*?\})\s*```', response_text, re.DOTALL)
    if json_match:
        try:
            return json.loads(json_match.group(1))
        except json.JSONDecodeError:
            pass
    
    # Try to find JSON-like content without markdown
    json_match = re.search(r'(\{.*?\})', response_text, re.DOTALL)
    if json_match:
        try:
            return json.loads(json_match.group(1))
        except json.JSONDecodeError:
            pass
    
    # Return None if no valid JSON found
    return None

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({
        "status": "Backend is running!",
        "openai_configured": bool(os.getenv('OPENAI_API_KEY')),
        "council_available": True,
        "agents_count": len(council.agents),
        "debate_engine_available": True,
        "celebrities_count": len(debate_engine.celebrities),
        "phase_2_features": ["Celebrity Debates", "Viral Content Generation", "Trending Conversations"]
    })

@app.route('/api/council/info', methods=['GET'])
def get_council_info():
    """Get information about all council members"""
    try:
        council_info = council.get_council_info()
        return jsonify({
            "council_members": council_info,
            "total_agents": len(council_info)
        })
    except Exception as e:
        return jsonify({"error": f"Failed to get council info: {str(e)}"}), 500

@app.route('/api/council/agents', methods=['GET'])
def get_available_agents():
    """Get available agents for selection"""
    try:
        agents_info = council.get_available_agents()
        return jsonify({"available_agents": agents_info})
    except Exception as e:
        return jsonify({"error": f"Failed to get agents info: {str(e)}"}), 500

@app.route('/api/council/analyze', methods=['POST'])
def analyze_with_council():
    """Analyze product using the Product Strategy Council"""
    try:
        data = request.get_json()
        
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        # Extract product data
        product_data = {
            "name": data.get('name', ''),
            "description": data.get('description', ''),
            "target_market": data.get('target_market', ''),
            "key_features": data.get('key_features', '')
        }
        
        # Get selected agents (optional)
        selected_agents = data.get('selected_agents', None)
        
        # Run the council analysis
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            analysis_result = loop.run_until_complete(
                council.analyze_product(product_data, selected_agents)
            )
        finally:
            loop.close()
        
        return jsonify({"council_analysis": analysis_result})
    
    except Exception as e:
        print(f"Council Analysis Error: {str(e)}")  # For debugging
        return jsonify({"error": f"Council analysis failed: {str(e)}"}), 500

@app.route('/api/analyze', methods=['POST'])
def analyze_product():
    try:
        data = request.get_json()
        
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        # Prepare the prompt for OpenAI
        prompt = f"""
        As a senior product strategist, analyze this product and provide insights:
        
        Product Name: {data.get('name', 'Not specified')}
        Description: {data.get('description', 'Not specified')}
        Target Market: {data.get('target_market', 'Not specified')}
        Key Features: {data.get('key_features', 'Not specified')}
        
        Please provide a comprehensive analysis in the following JSON format (respond ONLY with valid JSON):
        {{
            "market_fit": "Analysis of how well this product fits the target market",
            "competitive_advantage": "Key competitive advantages this product has",
            "risks": ["Risk 1", "Risk 2", "Risk 3"],
            "opportunities": ["Opportunity 1", "Opportunity 2", "Opportunity 3"]
        }}
        
        Make your analysis specific, actionable, and based on real market insights. Respond with ONLY the JSON object, no additional text or markdown formatting.
        """
        
        # Call OpenAI API
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a senior product strategist with 15+ years of experience. Provide detailed, actionable insights in valid JSON format only. Do not use markdown formatting."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=800,
            temperature=0.7
        )
        
        # Extract the response content
        ai_response = response.choices[0].message.content.strip()
        print(f"AI Response: {ai_response}")  # For debugging
        
        # Try to parse as JSON with improved handling
        analysis = extract_json_from_response(ai_response)
        
        if analysis is None:
            # Enhanced fallback if AI doesn't return valid JSON
            analysis = {
                "market_fit": f"Based on the analysis of {data.get('name', 'your product')}, there appears to be strong market potential in the {data.get('target_market', 'target')} segment.",
                "competitive_advantage": "The key differentiators include innovative features and focused market approach that sets this apart from existing solutions.",
                "risks": [
                    "Market competition from established players",
                    "Technology adoption challenges",
                    "Resource allocation and scaling requirements"
                ],
                "opportunities": [
                    "Growing market demand in target segment",
                    "Potential for strategic partnerships",
                    "Expansion into adjacent markets and use cases"
                ]
            }
        
        return jsonify({"analysis": analysis})
    
    except Exception as e:
        print(f"Error: {str(e)}")  # For debugging
        return jsonify({"error": f"Analysis failed: {str(e)}"}), 500

# CELEBRITY DEBATE ENGINE ENDPOINTS

@app.route('/api/debate/celebrities', methods=['GET'])
def get_available_celebrities():
    """Get all available celebrity agents"""
    try:
        celebrities = debate_engine.get_available_celebrities()
        return jsonify({"celebrities": celebrities})
    except Exception as e:
        return jsonify({"error": f"Failed to get celebrities: {str(e)}"}), 500

@app.route('/api/debate/start', methods=['POST'])
def start_celebrity_debate():
    """Start a new celebrity debate/conversation"""
    try:
        data = request.get_json()
        
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        topic = data.get('topic', '')
        participant_ids = data.get('participants', [])
        conversation_style = data.get('style', 'debate')
        
        if not topic:
            return jsonify({"error": "Topic is required"}), 400
        
        if len(participant_ids) < 2:
            return jsonify({"error": "At least 2 participants required"}), 400
        
        # Start the conversation
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(
                debate_engine.start_conversation(topic, participant_ids, conversation_style)
            )
        finally:
            loop.close()
        
        return jsonify(result)
    
    except Exception as e:
        print(f"Start Debate Error: {str(e)}")
        return jsonify({"error": f"Failed to start debate: {str(e)}"}), 500

@app.route('/api/debate/round', methods=['POST'])
def add_debate_round():
    """Add a new round to an existing conversation"""
    try:
        data = request.get_json()
        conversation_id = data.get('conversation_id', '')
        
        if not conversation_id:
            return jsonify({"error": "Conversation ID is required"}), 400
        
        # Add conversation round
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(
                debate_engine.add_conversation_round(conversation_id)
            )
        finally:
            loop.close()
        
        return jsonify(result)
    
    except Exception as e:
        print(f"Add Round Error: {str(e)}")
        return jsonify({"error": f"Failed to add round: {str(e)}"}), 500

@app.route('/api/debate/conversation/<conversation_id>', methods=['GET'])
def get_conversation(conversation_id):
    """Get a specific conversation by ID"""
    try:
        conversation = debate_engine.get_conversation(conversation_id)
        return jsonify(conversation)
    except Exception as e:
        return jsonify({"error": f"Failed to get conversation: {str(e)}"}), 500

@app.route('/api/debate/trending', methods=['GET'])
def get_trending_conversations():
    """Get recent/trending conversations"""
    try:
        limit = request.args.get('limit', 10, type=int)
        trending = debate_engine.get_recent_conversations(limit)
        return jsonify({"trending": trending})
    except Exception as e:
        return jsonify({"error": f"Failed to get trending: {str(e)}"}), 500

@app.route('/api/debate/social-content/<conversation_id>', methods=['GET'])
def generate_social_content(conversation_id):
    """Generate social media content from a conversation"""
    try:
        content = debate_engine.generate_social_media_content(conversation_id)
        return jsonify(content)
    except Exception as e:
        return jsonify({"error": f"Failed to generate content: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001, debug=True) 