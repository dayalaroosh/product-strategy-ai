const API_BASE_URL = 'http://localhost:8000';

export interface ProductAnalysis {
  market_fit: string;
  competitive_advantage: string;
  risks: string[];
  opportunities: string[];
}

export interface FocusGroupParticipant {
  role: string;
  feedback: string;
}

export interface AnalysisResponse {
  analysis: ProductAnalysis;
}

export interface FocusGroupResponse {
  participants: FocusGroupParticipant[];
}

export const api = {
  async analyzeProduct(data: any): Promise<AnalysisResponse> {
    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to analyze product');
    }
    
    return response.json();
  },

  async simulateFocusGroup(data: any): Promise<FocusGroupResponse> {
    const response = await fetch(`${API_BASE_URL}/api/focus-group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to simulate focus group');
    }
    
    return response.json();
  },
}; 