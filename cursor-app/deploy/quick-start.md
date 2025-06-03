# Quick Start Deployment Guide

## Prerequisites
1. GitHub account with your project pushed
2. OpenAI API key ready

## Step 1: Deploy Backend to Railway (5 minutes)

### 1.1 Install Railway CLI
```bash
# Install Railway CLI
curl -fsSL https://railway.app/install.sh | sh
```

### 1.2 Deploy Development Backend
```bash
cd cursor-app/backend

# Login to Railway
railway login

# Create new project
railway init

# Add PostgreSQL database
railway add --database postgresql

# Set environment variables
railway env set OPENAI_API_KEY=your_openai_key_here
railway env set FLASK_APP=simple_main.py
railway env set FLASK_ENV=development

# Deploy
railway deploy
```

### 1.3 Get Your Backend URL
```bash
# Get the deployment URL
railway status
# Copy the URL (e.g., https://backend-dev-production-abcd.up.railway.app)
```

---

## Step 2: Deploy Frontend to Vercel (3 minutes)

### 2.1 Install Vercel CLI
```bash
cd cursor-app
npm install -g vercel
```

### 2.2 Deploy Development Frontend
```bash
# Login to Vercel
vercel login

# Deploy to development
vercel

# When prompted:
# - Link to existing project? No
# - Project name: cursor-app-dev
# - Directory: ./
# - Override settings? No
```

### 2.3 Set Environment Variables
```bash
# Set backend URL (replace with your Railway URL)
vercel env add NEXT_PUBLIC_BACKEND_URL
# Enter: https://your-railway-backend-url.up.railway.app

vercel env add NEXT_PUBLIC_ENV
# Enter: development
```

### 2.4 Redeploy with Environment Variables
```bash
vercel --prod=false
```

---

## Step 3: Test Your Deployment

### 3.1 Test Backend
```bash
# Replace with your Railway URL
curl https://your-railway-backend-url.up.railway.app/

# Should return JSON with status: "Backend is running!"
```

### 3.2 Test Frontend
1. Open your Vercel URL in browser
2. Navigate to any page that calls the backend
3. Check browser console for any CORS errors

---

## Step 4: Production Deployment

### 4.1 Create Production Backend
```bash
cd cursor-app/backend

# Create new Railway project for production
railway init

# Add PostgreSQL database
railway add --database postgresql

# Set production environment variables
railway env set OPENAI_API_KEY=your_openai_key_here
railway env set FLASK_APP=simple_main.py
railway env set FLASK_ENV=production

# Deploy
railway deploy
```

### 4.2 Create Production Frontend
```bash
cd cursor-app

# Deploy to production
vercel --prod

# Set production environment variables
vercel env add NEXT_PUBLIC_BACKEND_URL production
# Enter: https://your-production-railway-url.up.railway.app

vercel env add NEXT_PUBLIC_ENV production
# Enter: production

# Redeploy
vercel --prod
```

---

## Commands Summary

### Development Deployment
```bash
# Backend
cd cursor-app/backend
railway login
railway init
railway add --database postgresql
railway env set OPENAI_API_KEY=your_key
railway env set FLASK_APP=simple_main.py
railway deploy

# Frontend
cd cursor-app
vercel login
vercel
vercel env add NEXT_PUBLIC_BACKEND_URL
vercel env add NEXT_PUBLIC_ENV
vercel --prod=false
```

### Production Deployment
```bash
# Backend (new Railway project)
railway init
railway add --database postgresql
railway env set OPENAI_API_KEY=your_key
railway env set FLASK_APP=simple_main.py
railway env set FLASK_ENV=production
railway deploy

# Frontend
vercel --prod
vercel env add NEXT_PUBLIC_BACKEND_URL production
vercel env add NEXT_PUBLIC_ENV production
vercel --prod
```

---

## Troubleshooting

### Common Issues
1. **CORS Errors**: Update CORS origins in your Flask backend
2. **Environment Variables**: Check Vercel and Railway dashboards
3. **Build Failures**: Check logs with `railway logs` or in Vercel dashboard

### Useful Commands
```bash
# Check Railway status
railway status

# View Railway logs
railway logs

# Check Vercel deployment
vercel inspect

# Test health endpoint
curl https://your-backend-url.up.railway.app/
```

---

## Next Steps
1. Update vercel.json with your actual Railway URLs
2. Set up GitHub Actions for automated deployments
3. Configure custom domains (optional)
4. Add monitoring and alerts 