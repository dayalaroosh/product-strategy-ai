import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  let body: any;
  try {
    body = await request.json()
    const { event, page, section, ctaType, ctaText, url, data } = body

    // Check if prisma is available
    if (!prisma) {
      console.log('Analytics Event (no DB):', {
        event,
        timestamp: new Date().toISOString(),
        ...body
      })
      return NextResponse.json({ 
        success: true, 
        message: 'Analytics event logged (database unavailable)' 
      })
    }

    // Get client IP and user agent
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save to database
    const analyticsEvent = await prisma.analyticsEvent.create({
      data: {
        event,
        page,
        section,
        ctaType,
        ctaText,
        url,
        userAgent,
        ip,
        data: data ? JSON.stringify(data) : null,
      },
    })

    console.log('Analytics event saved:', analyticsEvent)

    return NextResponse.json({ 
      success: true, 
      id: analyticsEvent.id,
      message: 'Analytics event tracked successfully' 
    })
  } catch (error) {
    console.error('Error saving analytics event:', error)
    
    // Fallback to console logging if database fails
    console.log('Analytics Event (fallback):', {
      event: body?.event,
      timestamp: new Date().toISOString(),
      ...body
    })

    return NextResponse.json({ 
      success: false, 
      error: 'Failed to save analytics event, logged to console' 
    }, { status: 500 })
  }
}

// GET endpoint to retrieve analytics data for dashboard
export async function GET(request: NextRequest) {
  try {
    // Check if prisma is available
    if (!prisma) {
      // Return mock data if database is unavailable
      return NextResponse.json({
        success: true,
        events: [],
        metrics: {
          pageViews: 0,
          ctaClicks: 0,
          sectionViews: 0,
          userInfoCaptures: 0,
        }
      })
    }

    const { searchParams } = new URL(request.url)
    const event = searchParams.get('event')
    const limit = parseInt(searchParams.get('limit') || '100')
    
    const where = event && event !== 'all' ? { event } : {}
    
    const events = await prisma.analyticsEvent.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    // Get metrics
    const metrics = await Promise.all([
      prisma.analyticsEvent.count({ where: { event: 'page_view' } }),
      prisma.analyticsEvent.count({ where: { event: 'cta_click' } }),
      prisma.analyticsEvent.count({ where: { event: 'section_view' } }),
      prisma.analyticsEvent.count({ where: { event: 'user_info_captured' } }),
    ])

    return NextResponse.json({
      success: true,
      events,
      metrics: {
        pageViews: metrics[0],
        ctaClicks: metrics[1],
        sectionViews: metrics[2],
        userInfoCaptures: metrics[3],
      }
    })
  } catch (error) {
    console.error('Error retrieving analytics:', error)
    // Return fallback data if database fails
    return NextResponse.json({
      success: true,
      events: [],
      metrics: {
        pageViews: 0,
        ctaClicks: 0,
        sectionViews: 0,
        userInfoCaptures: 0,
      }
    })
  }
} 