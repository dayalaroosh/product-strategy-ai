from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from openai import OpenAI
import json
import re

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

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
        "openai_configured": bool(os.getenv('OPENAI_API_KEY'))
    })

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001, debug=True) 