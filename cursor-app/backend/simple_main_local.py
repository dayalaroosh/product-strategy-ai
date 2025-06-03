from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import json
import re

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize OpenAI client only when needed
def get_openai_client():
    """Get OpenAI client, initialized only when needed"""
    try:
        from openai import OpenAI
        api_key = os.getenv('OPENAI_API_KEY')
        if not api_key or api_key == 'your_openai_api_key_here':
            return None
        return OpenAI(api_key=api_key)
    except Exception as e:
        print(f"Error initializing OpenAI client: {e}")
        return None

# Initialize council and debate engine only when OpenAI is available
def get_council():
    """Get council, initialized only when OpenAI is available"""
    try:
        from agents.council import ProductStrategyCouncil
        return ProductStrategyCouncil()
    except Exception as e:
        print(f"Error initializing council: {e}")
        return None

def get_debate_engine():
    """Get debate engine, initialized only when OpenAI is available"""
    try:
        from agents.debate_engine import DebateEngine
        return DebateEngine()
    except Exception as e:
        print(f"Error initializing debate engine: {e}")
        return None

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
    """Health check endpoint"""
    api_key = os.getenv('OPENAI_API_KEY')
    openai_configured = bool(api_key and api_key != 'your_openai_api_key_here')
    
    council = get_council()
    debate_engine = get_debate_engine()
    
    return jsonify({
        "status": "Backend is running!",
        "openai_configured": openai_configured,
        "council_available": council is not None,
        "agents_count": len(council.agents) if council else 0,
        "debate_engine_available": debate_engine is not None,
        "celebrities_count": len(debate_engine.celebrities) if debate_engine else 0,
        "phase_2_features": ["Celebrity Debates", "Viral Content Generation", "Trending Conversations"],
        "message": "Add your OpenAI API key to .env file to enable AI features" if not openai_configured else "Ready for AI analysis!"
    })

@app.route('/api/analyze', methods=['POST'])
def analyze_product():
    """Analyze product with AI or provide mock response for testing"""
    try:
        data = request.get_json()
        
        # Check if OpenAI API key is configured
        api_key = os.getenv('OPENAI_API_KEY')
        if not api_key or api_key == 'your_openai_api_key_here':
            # Return mock analysis for testing without API key
            analysis = {
                "market_fit": f"Mock analysis for '{data.get('name', 'your product')}' - appears to have strong potential in the {data.get('target_market', 'specified target')} market. This is a placeholder response since no OpenAI API key is configured.",
                "competitive_advantage": "Mock competitive analysis: The product's unique features and market positioning could provide significant advantages. Configure OpenAI API key for detailed AI analysis.",
                "risks": [
                    "Market competition from established players",
                    "Technology adoption challenges", 
                    "Resource allocation and scaling requirements",
                    "Note: This is mock data - add OpenAI API key for real analysis"
                ],
                "opportunities": [
                    "Growing market demand in target segment",
                    "Potential for strategic partnerships",
                    "Expansion into adjacent markets and use cases",
                    "Note: This is mock data - add OpenAI API key for real analysis"
                ]
            }
            return jsonify({
                "analysis": analysis,
                "is_mock": True,
                "message": "Add your OpenAI API key to .env file for real AI analysis"
            })
        
        # Get OpenAI client
        client = get_openai_client()
        if not client:
            return jsonify({"error": "OpenAI client initialization failed"}), 500
        
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
        
        return jsonify({
            "analysis": analysis,
            "is_mock": False,
            "message": "Real AI analysis complete"
        })
    
    except Exception as e:
        print(f"Error: {str(e)}")  # For debugging
        return jsonify({"error": f"Analysis failed: {str(e)}"}), 500

@app.route('/api/council/info', methods=['GET'])
def get_council_info():
    """Get information about all council members"""
    try:
        council = get_council()
        if not council:
            return jsonify({"error": "Council not available - OpenAI API key required"}), 500
            
        council_info = council.get_council_info()
        return jsonify({
            "council_members": council_info,
            "total_agents": len(council_info)
        })
    except Exception as e:
        return jsonify({"error": f"Failed to get council info: {str(e)}"}), 500

@app.route('/api/debug', methods=['GET'])
def debug_info():
    """Debug endpoint to check environment and dependencies"""
    try:
        import sys
        return jsonify({
            "python_version": sys.version,
            "environment_variables": {
                "OPENAI_API_KEY": "***configured***" if os.getenv('OPENAI_API_KEY') else "not configured",
                "PORT": os.getenv('PORT', '8001'),
                "CORS_ORIGINS": os.getenv('CORS_ORIGINS', 'not configured'),
                "FLASK_ENV": os.getenv('FLASK_ENV', 'not configured')
            },
            "flask_version": "3.0.0",
            "working_directory": os.getcwd()
        })
    except Exception as e:
        return jsonify({"error": f"Debug failed: {str(e)}"}), 500

if __name__ == '__main__':
    print("🚀 Starting AI Product Strategy Platform (Local Development Mode)")
    print("=" * 60)
    
    api_key = os.getenv('OPENAI_API_KEY')
    if not api_key or api_key == 'your_openai_api_key_here':
        print("⚠️  OpenAI API key not configured - using mock responses")
        print("📝 Add your API key to .env file for real AI analysis")
    else:
        print("✅ OpenAI API key configured - AI features enabled")
    
    print(f"🌐 Server starting on: http://localhost:8001")
    print("🔗 Frontend should connect from: http://localhost:3000")
    print("=" * 60)
    
    app.run(host='0.0.0.0', port=8001, debug=True) 