'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, Users, MousePointer, Eye, Download, RefreshCw } from 'lucide-react'

interface AnalyticsEvent {
  event: string
  timestamp: string
  page?: string
  section?: string
  ctaType?: string
  ctaText?: string
  url?: string
  userAgent?: string
  [key: string]: any
}

export default function AnalyticsDashboard() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  // In a real implementation, you'd fetch from your analytics API
  // For now, we'll simulate data since we're only console logging
  useEffect(() => {
    // Simulate fetching analytics data
    const simulateData = () => {
      const mockEvents: AnalyticsEvent[] = [
        {
          event: 'page_view',
          page: 'presentation',
          timestamp: new Date().toISOString(),
          url: '/presentation',
          userAgent: 'Mozilla/5.0...'
        },
        {
          event: 'cta_click',
          ctaType: 'product',
          ctaText: 'Try the AI System',
          section: 'hero',
          timestamp: new Date(Date.now() - 300000).toISOString(),
        },
        {
          event: 'section_view',
          section: 'about',
          timestamp: new Date(Date.now() - 600000).toISOString(),
        }
      ]
      setEvents(mockEvents)
      setLoading(false)
    }

    simulateData()
  }, [])

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.event === filter
  )

  const getMetrics = () => {
    const pageViews = events.filter(e => e.event === 'page_view').length
    const ctaClicks = events.filter(e => e.event === 'cta_click').length
    const sectionViews = events.filter(e => e.event === 'section_view').length
    const userInfoCaptures = events.filter(e => e.event === 'user_info_captured').length

    return { pageViews, ctaClicks, sectionViews, userInfoCaptures }
  }

  const metrics = getMetrics()

  const exportData = () => {
    const csv = [
      ['Event', 'Timestamp', 'Page', 'Section', 'CTA Type', 'CTA Text'].join(','),
      ...filteredEvents.map(event => [
        event.event,
        event.timestamp,
        event.page || '',
        event.section || '',
        event.ctaType || '',
        event.ctaText || ''
      ].join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `analytics-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Track user engagement and conversion metrics</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={exportData} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button onClick={() => window.location.reload()}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.pageViews}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <MousePointer className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">CTA Clicks</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.ctaClicks}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Section Views</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.sectionViews}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">User Info</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.userInfoCaptures}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Events
            </Button>
            <Button 
              variant={filter === 'page_view' ? 'default' : 'outline'}
              onClick={() => setFilter('page_view')}
            >
              Page Views
            </Button>
            <Button 
              variant={filter === 'cta_click' ? 'default' : 'outline'}
              onClick={() => setFilter('cta_click')}
            >
              CTA Clicks
            </Button>
            <Button 
              variant={filter === 'section_view' ? 'default' : 'outline'}
              onClick={() => setFilter('section_view')}
            >
              Section Views
            </Button>
          </div>
        </div>

        {/* Events Table */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Event</th>
                  <th className="text-left py-2 px-4">Timestamp</th>
                  <th className="text-left py-2 px-4">Page</th>
                  <th className="text-left py-2 px-4">Section</th>
                  <th className="text-left py-2 px-4">CTA</th>
                  <th className="text-left py-2 px-4">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.event === 'page_view' ? 'bg-blue-100 text-blue-800' :
                        event.event === 'cta_click' ? 'bg-green-100 text-green-800' :
                        event.event === 'section_view' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.event}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-600">
                      {new Date(event.timestamp).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 text-sm">{event.page || '-'}</td>
                    <td className="py-2 px-4 text-sm">{event.section || '-'}</td>
                    <td className="py-2 px-4 text-sm">
                      {event.ctaText || (event.ctaType ? event.ctaType : '-')}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-500">
                      {event.url && (
                        <a href={event.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredEvents.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No events found for the selected filter.
              </div>
            )}
          </div>
        </Card>

        {/* Implementation Note */}
        <Card className="p-6 mt-8 bg-yellow-50">
          <h3 className="text-lg font-semibold mb-2 text-yellow-800">Implementation Note</h3>
          <p className="text-yellow-700 mb-4">
            This dashboard currently shows simulated data. To view real analytics data, you need to:
          </p>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Set up a database (PostgreSQL, MongoDB, or ClickHouse)</li>
            <li>Modify <code>/api/analytics</code> to save data instead of just logging</li>
            <li>Create an API endpoint to fetch analytics data</li>
            <li>Connect this dashboard to the real data source</li>
          </ul>
          <div className="mt-4">
            <Button 
              onClick={() => console.log('Current analytics setup is logging to console. Check browser console for real data.')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Check Console for Real Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
} 