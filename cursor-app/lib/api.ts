export interface ProductAnalysis {
  market_fit: string;
  competitive_advantage: string;
  risks: string[];
  opportunities: string[];
}

export interface AnalysisResponse {
  analysis: ProductAnalysis;
}

const API_BASE_URL = 'http://localhost:8001';

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
  }
}; 