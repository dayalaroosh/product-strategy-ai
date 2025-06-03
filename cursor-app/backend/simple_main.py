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

# VOICE PROCESSING ENDPOINTS

@app.route('/api/voice/speech-to-text', methods=['POST'])
def speech_to_text():
    """Convert speech audio to text using OpenAI Whisper"""
    temp_file_path = None
    try:
        # Check if OpenAI API key is configured
        if not os.getenv('OPENAI_API_KEY'):
            print("ERROR: OpenAI API key not configured")
            return jsonify({"error": "OpenAI API key not configured"}), 500
        
        # Check if audio file is present
        if 'audio' not in request.files:
            print("ERROR: No audio file provided in request")
            return jsonify({"error": "No audio file provided"}), 400
        
        audio_file = request.files['audio']
        if audio_file.filename == '':
            print("ERROR: No audio file selected")
            return jsonify({"error": "No audio file selected"}), 400
        
        print(f"Processing audio file: {audio_file.filename}, size: {audio_file.content_length if hasattr(audio_file, 'content_length') else 'unknown'}")
        
        # Save audio file temporarily with proper extension detection
        file_extension = '.webm'  # Default
        if hasattr(audio_file, 'content_type'):
            print(f"Audio content type: {audio_file.content_type}")
            if 'wav' in audio_file.content_type:
                file_extension = '.wav'
            elif 'mp3' in audio_file.content_type:
                file_extension = '.mp3'
            elif 'ogg' in audio_file.content_type:
                file_extension = '.ogg'
        
        # Create temporary file but don't use context manager to avoid Windows locking issues
        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=file_extension)
        temp_file_path = temp_file.name
        temp_file.close()  # Close immediately to avoid locking
        
        print(f"Saving audio to temporary file: {temp_file_path}")
        audio_file.save(temp_file_path)
        
        # Check file size
        file_size = os.path.getsize(temp_file_path)
        print(f"Saved audio file size: {file_size} bytes")
        
        if file_size == 0:
            return jsonify({"error": "Audio file is empty"}), 400
        
        # Use OpenAI Whisper for transcription
        print("Sending to OpenAI Whisper...")
        with open(temp_file_path, 'rb') as audio:
            transcript = client.audio.transcriptions.create(
                model="whisper-1",
                file=audio,
                response_format="text"
            )
        
        print(f"Transcription successful: '{transcript}'")
        return jsonify({
            "transcript": transcript,
            "success": True
        })
    
    except Exception as e:
        print(f"Speech-to-text error: {str(e)}")
        print(f"Error type: {type(e).__name__}")
        import traceback
        print(f"Full traceback: {traceback.format_exc()}")
        return jsonify({"error": f"Transcription failed: {str(e)}"}), 500
    
    finally:
        # Clean up temp file with retry logic for Windows
        if temp_file_path and os.path.exists(temp_file_path):
            import time
            for attempt in range(3):
                try:
                    os.unlink(temp_file_path)
                    print(f"Temporary file cleaned up successfully")
                    break
                except OSError as e:
                    if attempt < 2:  # Not the last attempt
                        print(f"Attempt {attempt + 1}: Failed to delete temp file, retrying in 0.1s...")
                        time.sleep(0.1)
                    else:
                        print(f"Failed to delete temporary file after 3 attempts: {str(e)}")
                        # Don't fail the request just because we couldn't clean up

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

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8001))
    app.run(host='0.0.0.0', port=port, debug=False) 