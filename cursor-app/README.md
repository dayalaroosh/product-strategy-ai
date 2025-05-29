# AI Product Strategy & Validation Tool

A modern web application that combines AI-powered product strategy analysis with simulated focus groups.

## Project Structure

```
cursor-app/
├── src/                    # Frontend source code (Next.js)
│   ├── app/               # Next.js App Router
│   ├── components/        # React components
│   └── lib/              # Shared utilities
├── backend/               # FastAPI backend
│   ├── app/              # API endpoints
│   ├── agents/           # AI agent definitions
│   └── models/           # Data models
└── docs/                 # Project documentation
```

## Features

1. Product Strategy Council - First level analysis
2. Focus Group Simulator - Detailed discussion with AI experts
3. Modern, agent-centric UI
4. API integration capabilities
5. Tiered feature access

## Getting Started

### Frontend (Next.js)
```bash
npm install
npm run dev
```

### Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Development

- Frontend runs on http://localhost:3000
- Backend API runs on http://localhost:8000
- API documentation available at http://localhost:8000/docs

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
