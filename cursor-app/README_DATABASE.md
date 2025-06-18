# Database Setup for Analytics & Feedback Tracking

## Overview
This project now includes a SQLite database with Prisma ORM to track:
- **Analytics Events**: Page views, CTA clicks, section views, user info captures
- **Feedback Submissions**: Form submissions with ratings, contact info, and interests

## Quick Setup

### 1. Install Dependencies
```bash
npm install @prisma/client prisma
```

### 2. Initialize Database
```bash
npx prisma db push
```

### 3. Generate Prisma Client
```bash
npx prisma generate
```

### 4. View Database (Optional)
```bash
npx prisma studio
```

## Database Schema

### Analytics Events Table
- `id`: Unique identifier
- `event`: Event type (page_view, cta_click, section_view, user_info_captured)
- `timestamp`: When the event occurred
- `page`: Page where event occurred
- `section`: Section on the page
- `ctaType`: Type of CTA clicked
- `ctaText`: Text of the CTA
- `url`: Full URL
- `userAgent`: User's browser info
- `ip`: User's IP address
- `data`: Additional JSON data

### Feedback Submissions Table
- `id`: Unique identifier
- `timestamp`: When feedback was submitted
- `name`: User's name
- `email`: User's email
- `company`: User's company
- `role`: User's role
- `interest`: What they're interested in (hiring, partnership, etc.)
- `rating`: Rating out of 5
- `feedback`: Text feedback
- `ip`: User's IP address
- `userAgent`: User's browser info

## API Endpoints

### Analytics
- `POST /api/analytics` - Track new event
- `GET /api/analytics?event=all&limit=100` - Get events

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback?limit=50` - Get submissions (admin)

## Dashboard Access

### Analytics Dashboard
Visit: `/analytics` to view:
- Real-time metrics
- Event filtering
- CSV export
- Event timeline

### Features
- ✅ Real database storage
- ✅ Event filtering
- ✅ CSV export
- ✅ Real-time refresh
- ✅ Fallback to mock data if DB unavailable

## File Structure
```
cursor-app/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── dev.db                 # SQLite database file
├── lib/
│   └── db.ts                  # Prisma client setup
├── app/
│   ├── api/
│   │   ├── analytics/route.ts # Analytics API
│   │   └── feedback/route.ts  # Feedback API
│   └── analytics/
│       └── page.tsx           # Analytics dashboard
└── components/
    ├── Analytics.tsx          # Analytics tracking functions
    └── FeedbackForm.tsx       # Feedback form component
```

## Production Deployment

For production on Vercel:

1. **Add Environment Variables:**
   ```
   DATABASE_URL="file:./dev.db"
   ```

2. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Initialize Database on Vercel:**
   The database will be created automatically on first deployment.

## Viewing Data

### Via Dashboard
- Analytics: `https://your-domain/analytics`
- Feedback: Available via API at `/api/feedback`

### Via Prisma Studio (Development)
```bash
npx prisma studio
```

### Via Database Query
```javascript
import { prisma } from '@/lib/db'

// Get recent analytics
const events = await prisma.analyticsEvent.findMany({
  orderBy: { timestamp: 'desc' },
  take: 10
})

// Get feedback submissions
const feedback = await prisma.feedbackSubmission.findMany({
  where: { rating: { gte: 4 } }
})
```

## Troubleshooting

### Database Connection Issues
1. Ensure Prisma is installed: `npm install @prisma/client prisma`
2. Push schema: `npx prisma db push`
3. Generate client: `npx prisma generate`

### Missing Data
- Check API console logs for errors
- Verify API endpoints are working: `curl -X GET https://your-domain/api/analytics`
- Dashboard falls back to mock data if DB unavailable

### Prisma Errors
- Delete and recreate: `rm prisma/dev.db && npx prisma db push`
- Reset database: `npx prisma migrate reset`

## Next Steps

1. **Analytics Enhancements:**
   - Add user sessions
   - Geographic tracking
   - Conversion funnels
   - A/B testing support

2. **Feedback Improvements:**
   - Email notifications
   - Admin dashboard
   - Automated responses
   - Integration with CRM

3. **Production Database:**
   - Consider PostgreSQL for production
   - Add database backups
   - Implement data retention policies 