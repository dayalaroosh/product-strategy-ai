import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Extract feedback data
    const {
      name,
      email,
      company,
      role,
      rating,
      feedback,
      interest,
      context,
      timestamp,
      userAgent,
      url
    } = body

    // Log feedback data (in production, you'd save to database)
    console.log('Feedback received:', {
      name,
      email,
      company,
      role,
      rating,
      feedback,
      interest,
      context,
      timestamp,
      userAgent,
      url,
      ip: request.ip || 'unknown'
    })

    // For now, we'll just log it. In production, you'd want to:
    // 1. Save to database (Supabase, MongoDB, etc.)
    // 2. Send to analytics service (Mixpanel, Google Analytics, etc.)
    // 3. Send email notification
    // 4. Add to CRM system

    // Example of what you might do:
    /*
    await db.feedback.create({
      data: {
        name,
        email,
        company,
        role,
        rating,
        feedback,
        interest,
        context,
        timestamp: new Date(timestamp),
        userAgent,
        url,
        ip: request.ip
      }
    })
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Feedback received successfully' 
    })

  } catch (error) {
    console.error('Error processing feedback:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process feedback' },
      { status: 500 }
    )
  }
} 