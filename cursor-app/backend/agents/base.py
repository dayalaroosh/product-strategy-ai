from abc import ABC, abstractmethod
from typing import Dict, Any, List
from openai import OpenAI
import os

class BaseAgent(ABC):
    """Base class for all Product Strategy Council agents"""
    
    def __init__(self, name: str, role: str, expertise: str, personality: str):
        self.name = name
        self.role = role
        self.expertise = expertise
        self.personality = personality
        self.client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
    
    @abstractmethod
    def get_system_prompt(self) -> str:
        """Return the system prompt that defines this agent's perspective"""
        pass
    
    @abstractmethod
    def get_analysis_focus(self) -> List[str]:
        """Return the key areas this agent focuses on"""
        pass
    
    async def analyze(self, product_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze the product from this agent's perspective"""
        
        system_prompt = self.get_system_prompt()
        user_prompt = self._build_user_prompt(product_data)
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                max_tokens=600,
                temperature=0.7
            )
            
            analysis_text = response.choices[0].message.content.strip()
            
            return {
                "agent_name": self.name,
                "agent_role": self.role,
                "expertise": self.expertise,
                "analysis": analysis_text,
                "focus_areas": self.get_analysis_focus(),
                "confidence": self._calculate_confidence(product_data)
            }
            
        except Exception as e:
            return {
                "agent_name": self.name,
                "agent_role": self.role,
                "expertise": self.expertise,
                "analysis": f"Unable to provide analysis due to: {str(e)}",
                "focus_areas": self.get_analysis_focus(),
                "confidence": 0.0
            }
    
    def _build_user_prompt(self, product_data: Dict[str, Any]) -> str:
        """Build the user prompt with product information"""
        return f"""
        Please analyze this product from your perspective as a {self.role}:
        
        Product Name: {product_data.get('name', 'Not specified')}
        Description: {product_data.get('description', 'Not specified')}
        Target Market: {product_data.get('target_market', 'Not specified')}
        Key Features: {product_data.get('key_features', 'Not specified')}
        
        Focus on your areas of expertise: {', '.join(self.get_analysis_focus())}
        
        Provide a detailed analysis that includes:
        1. Your expert assessment of the product
        2. Key insights from your domain expertise
        3. Specific recommendations for improvement
        4. Potential risks or challenges you foresee
        
        Keep your response focused, actionable, and professional.
        """
    
    def _calculate_confidence(self, product_data: Dict[str, Any]) -> float:
        """Calculate confidence score based on available information"""
        score = 0.0
        fields = ['name', 'description', 'target_market', 'key_features']
        
        for field in fields:
            if product_data.get(field) and len(product_data[field].strip()) > 10:
                score += 0.25
                
        return min(score, 1.0)
    
    def get_agent_info(self) -> Dict[str, Any]:
        """Return agent information for UI display"""
        return {
            "name": self.name,
            "role": self.role,
            "expertise": self.expertise,
            "personality": self.personality,
            "focus_areas": self.get_analysis_focus()
        } 