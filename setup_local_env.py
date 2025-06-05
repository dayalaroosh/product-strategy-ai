#!/usr/bin/env python3
"""
Local Environment Setup Script for AI Product Strategy Platform
"""
import os
import sys
from pathlib import Path

def create_backend_env():
    """Create backend .env file with necessary variables"""
    backend_path = Path("cursor-app/backend")
    env_file = backend_path / ".env"
    
    # Ask user for OpenAI API key
    print("🚀 Setting up AI Product Strategy Platform for local development")
    print("=" * 60)
    
    openai_key = input("Enter your OpenAI API Key (required): ").strip()
    if not openai_key:
        print("❌ OpenAI API Key is required!")
        sys.exit(1)
    
    env_content = f"""OPENAI_API_KEY={openai_key}
PORT=8001
CORS_ORIGINS=http://localhost:3000,http://localhost:3005
FLASK_ENV=development
"""
    
    # Create backend directory if it doesn't exist
    backend_path.mkdir(parents=True, exist_ok=True)
    
    # Write .env file
    with open(env_file, 'w') as f:
        f.write(env_content)
    
    print(f"✅ Created backend .env file at {env_file}")

def create_frontend_env():
    """Create frontend .env.local file"""
    frontend_path = Path("cursor-app")
    env_file = frontend_path / ".env.local"
    
    env_content = """NEXT_PUBLIC_BACKEND_URL=http://localhost:8001
NEXT_PUBLIC_ENV=development
"""
    
    with open(env_file, 'w') as f:
        f.write(env_content)
    
    print(f"✅ Created frontend .env.local file at {env_file}")

def display_next_steps():
    """Display the next steps for running the application"""
    print("\n🎯 Environment setup complete! Next steps:")
    print("=" * 60)
    print("\n1. Start the Backend (Terminal 1):")
    print("   cd cursor-app/backend")
    print("   python -m pip install flask flask-cors openai python-dotenv")
    print("   python simple_main.py")
    print("   🌐 Backend will run on: http://localhost:8001")
    
    print("\n2. Start the Frontend (Terminal 2):")
    print("   cd cursor-app")
    print("   npm install")
    print("   npm run dev")
    print("   🌐 Frontend will run on: http://localhost:3000")
    
    print("\n3. Open your browser and go to: http://localhost:3000")
    print("\n🎉 Your AI Product Strategy Platform will be ready for testing!")

if __name__ == "__main__":
    try:
        create_backend_env()
        create_frontend_env()
        display_next_steps()
    except Exception as e:
        print(f"❌ Error during setup: {e}")
        sys.exit(1) 