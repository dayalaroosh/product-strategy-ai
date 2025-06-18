'use client'

import { useEffect } from 'react'

interface AnalyticsProps {
  page?: string
}

export default function Analytics({ page = 'unknown' }: AnalyticsProps) {
  useEffect(() => {
    // Track page view
    trackPageView(page)
  }, [page])

  return null // This component doesn't render anything
}

// Analytics functions
export const trackPageView = (page: string) => {
  try {
    const data = {
      event: 'page_view',
      page,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenSize: {
        width: window.screen.width,
        height: window.screen.height
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    // Send to analytics API
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.error('Analytics error:', error)
    })

    // Also log to console for debugging
    console.log('Page view tracked:', data)
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

export const trackCTAClick = (ctaType: string, ctaText: string, section?: string) => {
  try {
    const data = {
      event: 'cta_click',
      ctaType,
      ctaText,
      section,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }

    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.error('Analytics error:', error)
    })

    console.log('CTA click tracked:', data)
  } catch (error) {
    console.error('Error tracking CTA click:', error)
  }
}

export const trackUserInfo = (userInfo: {
  name?: string
  email?: string
  company?: string
  role?: string
  source?: string
}) => {
  try {
    const data = {
      event: 'user_info_captured',
      ...userInfo,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }

    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.error('Analytics error:', error)
    })

    console.log('User info tracked:', data)
  } catch (error) {
    console.error('Error tracking user info:', error)
  }
}

export const trackSectionView = (section: string) => {
  try {
    const data = {
      event: 'section_view',
      section,
      timestamp: new Date().toISOString(),
      url: window.location.href
    }

    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.error('Analytics error:', error)
    })

    console.log('Section view tracked:', data)
  } catch (error) {
    console.error('Error tracking section view:', error)
  }
} 