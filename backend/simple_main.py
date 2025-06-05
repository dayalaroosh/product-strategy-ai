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
import tempfile
import base64

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
        "voice_features": ["Speech-to-Text", "Text-to-Speech", "Voice Council Analysis"],
        "phase_2_features": ["Celebrity Debates", "Viral Content Generation", "Trending Conversations", "Audio Interface"]
    })

# VOICE PROCESSING ENDPOINTS

@app.route('/api/voice/speech-to-text', methods=['POST'])
def speech_to_text():
    """Convert speech audio to text using OpenAI Whisper"""
    try:
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        # Check if audio file is present
        if 'audio' not in request.files:
            return jsonify({"error": "No audio file provided"}), 400
        
        audio_file = request.files['audio']
        if audio_file.filename == '':
            return jsonify({"error": "No audio file selected"}), 400
        
        # Save audio file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix='.webm') as temp_file:
            audio_file.save(temp_file.name)
            
            # Use OpenAI Whisper for transcription
            with open(temp_file.name, 'rb') as audio:
                transcript = client.audio.transcriptions.create(
                    model="whisper-1",
                    file=audio,
                    response_format="text"
                )
            
            # Clean up temp file
            os.unlink(temp_file.name)
            
            return jsonify({
                "transcript": transcript,
                "success": True
            })
    
    except Exception as e:
        print(f"Speech-to-text error: {str(e)}")
        return jsonify({"error": f"Transcription failed: {str(e)}"}), 500

@app.route('/api/voice/text-to-speech', methods=['POST'])
def text_to_speech():
    """Convert text to speech using OpenAI TTS"""
    try:
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        data = request.get_json()
        text = data.get('text', '')
        voice = data.get('voice', 'alloy')  # alloy, echo, fable, onyx, nova, shimmer
        
        if not text:
            return jsonify({"error": "No text provided"}), 400
        
        # Generate speech using OpenAI TTS
        response = client.audio.speech.create(
            model="tts-1",
            voice=voice,
            input=text[:4096]  # Limit text length
        )
        
        # Convert audio to base64 for JSON response
        audio_base64 = base64.b64encode(response.content).decode('utf-8')
        
        return jsonify({
            "audio_base64": audio_base64,
            "voice": voice,
            "text": text,
            "success": True
        })
    
    except Exception as e:
        print(f"Text-to-speech error: {str(e)}")
        return jsonify({"error": f"Speech generation failed: {str(e)}"}), 500

@app.route('/api/voice/council-analyze', methods=['POST'])
def voice_council_analyze():
    """Analyze product using voice input with speech responses"""
    try:
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        data = request.get_json()
        
        # Handle both direct text and transcribed audio
        if 'transcript' in data:
            # Coming from voice input
            transcript = data['transcript']
            # Parse product info from natural language
            product_data = parse_product_from_speech(transcript)
        else:
            # Direct product data
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
        
        # Generate audio responses for each agent (optional)
        include_audio = data.get('include_audio', False)
        if include_audio:
            analysis_result = add_audio_responses(analysis_result)
        
        return jsonify({
            "council_analysis": analysis_result,
            "product_data": product_data,
            "voice_enabled": include_audio
        })
    
    except Exception as e:
        print(f"Voice Council Analysis Error: {str(e)}")
        return jsonify({"error": f"Voice analysis failed: {str(e)}"}), 500

def parse_product_from_speech(transcript):
    """Parse product information from natural language speech"""
    try:
        # Use OpenAI to extract structured data from speech
        prompt = f"""
        Extract product information from this voice input: "{transcript}"
        
        Return a JSON object with these fields:
        - name: Product name (infer if not explicitly stated)
        - description: Product description 
        - target_market: Target market/audience
        - key_features: Key features and benefits
        
        If any field cannot be determined from the input, use "Not specified" for that field.
        
        Respond with ONLY the JSON object, no additional text.
        """
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a product information extractor. Return only valid JSON."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=300,
            temperature=0.3
        )
        
        extracted_data = extract_json_from_response(response.choices[0].message.content)
        
        if extracted_data:
            return extracted_data
        else:
            # Fallback if JSON extraction fails
            return {
                "name": "Voice Input Product",
                "description": transcript[:200],
                "target_market": "Not specified",
                "key_features": "Not specified"
            }
    
    except Exception as e:
        print(f"Speech parsing error: {str(e)}")
        return {
            "name": "Voice Input Product",
            "description": transcript[:200] if transcript else "Not specified",
            "target_market": "Not specified", 
            "key_features": "Not specified"
        }

def add_audio_responses(analysis_result):
    """Add audio responses to analysis results"""
    try:
        # Voice mapping for different agent types
        voice_map = {
            "MarketAnalyst": "nova",
            "TechnicalExpert": "onyx", 
            "BusinessStrategist": "alloy",
            "UXExpert": "shimmer",
            "FinancialAnalyst": "echo"
        }
        
        # Add audio for each agent analysis
        for agent_key, agent_analysis in analysis_result.get('agent_analyses', {}).items():
            agent_role = agent_analysis.get('agent_role', '')
            analysis_text = agent_analysis.get('analysis', '')
            
            if analysis_text and len(analysis_text) > 0:
                try:
                    # Get appropriate voice for agent
                    voice = voice_map.get(agent_role, 'alloy')
                    
                    # Generate speech
                    response = client.audio.speech.create(
                        model="tts-1",
                        voice=voice,
                        input=analysis_text[:1000]  # Limit for TTS
                    )
                    
                    # Add audio to analysis
                    agent_analysis['audio_base64'] = base64.b64encode(response.content).decode('utf-8')
                    agent_analysis['voice'] = voice
                    
                except Exception as e:
                    print(f"TTS error for {agent_role}: {str(e)}")
                    # Continue without audio for this agent
                    
        return analysis_result
        
    except Exception as e:
        print(f"Audio response generation error: {str(e)}")
        return analysis_result 