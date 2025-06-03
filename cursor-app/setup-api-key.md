# OpenAI API Key Setup

## Quick Setup (30 seconds)

1. **Get your OpenAI API Key:**
   - Go to https://platform.openai.com/api-keys
   - Create a new secret key
   - Copy the key (starts with `sk-proj-...`)

2. **Set the API Key (Windows PowerShell):**
   ```powershell
   cd C:\Users\Aroosh Dayal\Documents\Cursor\cursor-app\backend
   $env:OPENAI_API_KEY="your_actual_api_key_here"
   python simple_main.py
   ```

3. **Alternative - Create .env file:**
   ```
   # Create file: cursor-app/backend/.env
   OPENAI_API_KEY=your_actual_api_key_here
   ```

## Test Voice Interface
1. Frontend: http://localhost:3000/voice
2. Backend: http://localhost:8001 (should show status)
3. Click mic button and speak to test

## That's it! 
Everything else is already working. 