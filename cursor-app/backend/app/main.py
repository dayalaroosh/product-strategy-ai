from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
import openai
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = FastAPI(title="Product Strategy AI")

# Configure OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3002", "http://localhost:3005"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"status": "ok", "message": "Product Strategy AI API"}

@app.post("/api/analyze")
async def analyze_product(data: Dict[Any, Any]):
    """
    Analyze a product strategy using OpenAI.
    """
    try:
        # Create a prompt for the analysis
        prompt = f"""
        Analyze this product:
        Name: {data.get('name')}
        Description: {data.get('description')}
        Target Market: {data.get('target_market')}
        Key Features: {data.get('key_features')}

        Provide a detailed analysis including:
        1. Market fit assessment
        2. Competitive advantages
        3. Potential risks
        4. Key opportunities
        
        Format the response as JSON with these fields:
        - market_fit (string)
        - competitive_advantage (string)
        - risks (array of strings)
        - opportunities (array of strings)
        """

        # Get completion from OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an expert product strategist and market analyst."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
        )

        # Parse the response
        analysis = eval(response.choices[0].message.content)
        return {"analysis": analysis}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/focus-group")
async def simulate_focus_group(data: Dict[Any, Any]):
    """
    Simulate a focus group discussion using OpenAI.
    """
    try:
        prompt = f"""
        Act as a focus group of 4 different personas discussing this product:
        Name: {data.get('name')}
        Description: {data.get('description')}
        Target Market: {data.get('target_market')}
        Key Features: {data.get('key_features')}

        Provide feedback from:
        1. Product Manager perspective
        2. Developer perspective
        3. Marketing perspective
        4. End-user perspective

        Format the response as JSON with an array of objects containing:
        - role (string)
        - feedback (string)
        """

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are moderating a focus group discussion."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
        )

        # Parse the response
        result = eval(response.choices[0].message.content)
        return {"participants": result}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 