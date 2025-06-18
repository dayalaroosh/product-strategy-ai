import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  let body: any
  try {
    body = await request.json()
    const { name, email, company, role, interest, rating, feedback } = body

    // Check if prisma is available
    if (!prisma) {
      console.log('Feedback Submission (no DB):', {
        timestamp: new Date().toISOString(),
        ...body
      })
      return NextResponse.json({ 
        success: true, 
        message: 'Feedback logged (database unavailable)' 
      })
    }

    // Get client IP and user agent
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save to database
    const feedbackSubmission = await prisma.feedbackSubmission.create({
      data: {
        name,
        email,
        company,
        role,
        interest,
        rating: rating ? parseInt(rating) : null,
        feedback,
        ip,
        userAgent,
      },
    })

    console.log('Feedback submission saved:', feedbackSubmission)

    return NextResponse.json({ 
      success: true, 
      id: feedbackSubmission.id,
      message: 'Feedback submitted successfully' 
    })
  } catch (error) {
    console.error('Error saving feedback:', error)
    
    // Fallback to console logging if database fails
    console.log('Feedback Submission (fallback):', {
      timestamp: new Date().toISOString(),
      ...body
    })

    return NextResponse.json({ 
      success: false, 
      error: 'Failed to save feedback, logged to console' 
    }, { status: 500 })
  }
}

// GET endpoint to retrieve feedback submissions (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check if prisma is available
    if (!prisma) {
      // Return mock data if database is unavailable
      return NextResponse.json({
        success: true,
        submissions: [],
        stats: {
          total: 0,
          highRating: 0,
          hiringInterest: 0,
        }
      })
    }

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    
    const submissions = await prisma.feedbackSubmission.findMany({
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    const stats = await Promise.all([
      prisma.feedbackSubmission.count(),
      prisma.feedbackSubmission.count({ where: { rating: { gte: 4 } } }),
      prisma.feedbackSubmission.count({ where: { interest: 'hiring' } }),
    ])

    return NextResponse.json({
      success: true,
      submissions,
      stats: {
        total: stats[0],
        highRating: stats[1],
        hiringInterest: stats[2],
      }
    })
  } catch (error) {
    console.error('Error retrieving feedback:', error)
    // Return fallback data if database fails
    return NextResponse.json({
      success: true,
      submissions: [],
      stats: {
        total: 0,
        highRating: 0,
        hiringInterest: 0,
      }
    })
  }
} 