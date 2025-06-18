'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, Star, X } from 'lucide-react'

interface FeedbackFormProps {
  context?: string // 'presentation' | 'about' | 'product'
  onClose?: () => void
}

export default function FeedbackForm({ context = 'presentation', onClose }: FeedbackFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    rating: 0,
    feedback: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send feedback data
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          context,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Auto-close after 3 seconds
        setTimeout(() => {
          setIsOpen(false)
          onClose?.()
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full p-3 animate-bounce"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white shadow-2xl border border-gray-200">
        <div className="p-6 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Quick Feedback</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false)
                onClose?.()
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Thank you!</h4>
              <p className="text-gray-600">Your feedback helps me improve the presentation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                />
                <Input
                  placeholder="Role"
                  value={formData.role}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rate this presentation:</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className={`p-1 ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <Textarea
                placeholder="What did you think of the presentation? Any suggestions?"
                value={formData.feedback}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                className="min-h-[80px]"
                required
              />

              <div>
                <label className="block text-sm font-medium mb-2">Are you interested in:</label>
                <select
                  value={formData.interest}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="hiring">Product Management opportunities</option>
                  <option value="collaboration">Collaboration/Partnership</option>
                  <option value="product">Using the AI Product Strategy tool</option>
                  <option value="consulting">Product Strategy Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Feedback
                  </div>
                )}
              </Button>
            </form>
          )}
        </div>
      </Card>
    </div>
  )
} 