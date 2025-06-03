export interface ProductAnalysis {
  market_fit: string;
  competitive_advantage: string;
  risks: string[];
  opportunities: string[];
}

export interface AnalysisResponse {
  analysis: ProductAnalysis;
}

// New interfaces for Product Strategy Council
export interface AgentInfo {
  name: string;
  role: string;
  expertise: string;
  personality: string;
  focus_areas: string[];
}

export interface AgentAnalysis {
  agent_name: string;
  agent_role: string;
  expertise: string;
  analysis: string;
  focus_areas: string[];
  confidence: number;
  agent_key?: string;
}

export interface CouncilSummary {
  overall_assessment: string;
  confidence_score: number;
  key_themes: string[];
  participating_experts: string[];
}

export interface CouncilAnalysisResult {
  product_name: string;
  analysis_timestamp: string;
  agents_consulted: number;
  successful_analyses: number;
  agent_analyses: Record<string, AgentAnalysis>;
  council_summary: CouncilSummary;
  recommendations: string[];
}

export interface CouncilAnalysisResponse {
  council_analysis: CouncilAnalysisResult;
}

export interface CouncilInfoResponse {
  council_members: AgentInfo[];
  total_agents: number;
}

export interface AvailableAgentsResponse {
  available_agents: Record<string, {
    name: string;
    role: string;
    expertise: string;
    focus_areas: string[];
  }>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8001';

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

  // New Council API methods
  async getCouncilInfo(): Promise<CouncilInfoResponse> {
    const response = await fetch(`${API_BASE_URL}/api/council/info`);
    
    if (!response.ok) {
      throw new Error('Failed to get council info');
    }
    
    return response.json();
  },

  async getAvailableAgents(): Promise<AvailableAgentsResponse> {
    const response = await fetch(`${API_BASE_URL}/api/council/agents`);
    
    if (!response.ok) {
      throw new Error('Failed to get available agents');
    }
    
    return response.json();
  },

  async analyzeWithCouncil(data: {
    name: string;
    description: string;
    target_market: string;
    key_features: string;
    selected_agents?: string[];
  }): Promise<CouncilAnalysisResponse> {
    const response = await fetch(`${API_BASE_URL}/api/council/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to analyze with council');
    }
    
    return response.json();
  }
}; 