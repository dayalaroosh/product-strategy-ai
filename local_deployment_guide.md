# Local Deployment Guide for AI Product Strategy Platform

## 🚀 Quick Local Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- OpenAI API Key (get from https://platform.openai.com/api-keys)

### Step 1: Backend Setup

1. Navigate to backend directory:
```bash
cd cursor-app/backend
```

2. Create environment file:
```bash
# Create .env file with your OpenAI API key
echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
echo "PORT=8001" >> .env
echo "CORS_ORIGINS=http://localhost:3000,http://localhost:3005" >> .env
echo "FLASK_ENV=development" >> .env
```

3. Install Python dependencies (already done):
```bash
python -m pip install flask flask-cors openai python-dotenv
```

4. Start the backend server:
```bash
python simple_main.py
```
✅ Backend will run on: http://localhost:8001

### Step 2: Frontend Setup

1. Open a new terminal and navigate to frontend:
```bash
cd cursor-app
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Create frontend environment file:
```bash
# Create .env.local file
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:8001" > .env.local
echo "NEXT_PUBLIC_ENV=development" >> .env.local
```

4. Start the frontend development server:
```bash
npm run dev
```
✅ Frontend will run on: http://localhost:3000

### Step 3: Test the Application

1. Open your browser and go to: http://localhost:3000
2. You should see the AI Product Strategy Platform interface
3. Try submitting a product analysis to test the full stack

## 🔧 Troubleshooting

### Backend Issues
- **Port already in use**: Change PORT in .env to 8002 or another port
- **OpenAI API errors**: Verify your API key and account credits
- **Module not found**: Ensure all dependencies are installed

### Frontend Issues
- **Build errors**: Delete node_modules and .next, then run `npm install`
- **API connection errors**: Check that backend is running on correct port

## 🧪 Testing the Full Stack

1. **Health Check**: Visit http://localhost:8001 - should return JSON status
2. **API Test**: Use the frontend form to submit a product analysis
3. **Console Check**: Open browser dev tools to check for any errors

## 📁 Project Structure
```
cursor-app/
├── backend/
│   ├── simple_main.py    # Flask server
│   ├── .env             # Environment variables (create this)
│   └── agents/          # AI agent modules
├── app/                 # Next.js pages
├── lib/                 # API utilities
├── components/          # React components
├── package.json         # Frontend dependencies
└── .env.local          # Frontend environment (create this)
```

## 🚀 Next Steps

Once running locally:
1. Test the product analysis feature
2. Check the AI agent responses
3. Verify the UI/UX functionality
4. Test on different devices/browsers

Have fun testing your AI Product Strategy Platform! 🎉 