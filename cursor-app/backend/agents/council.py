import asyncio
from typing import Dict, Any, List
from .market_analyst import MarketAnalyst
from .technical_expert import TechnicalExpert
from .business_strategist import BusinessStrategist
from .ux_expert import UXExpert
from .financial_analyst import FinancialAnalyst

class ProductStrategyCouncil:
    """Orchestrates the Product Strategy Council analysis"""
    
    def __init__(self):
        self.agents = {
            "market_analyst": MarketAnalyst(),
            "technical_expert": TechnicalExpert(),
            "business_strategist": BusinessStrategist(),
            "ux_expert": UXExpert(),
            "financial_analyst": FinancialAnalyst()
        }
    
    def get_council_info(self) -> List[Dict[str, Any]]:
        """Return information about all council members"""
        return [agent.get_agent_info() for agent in self.agents.values()]
    
    async def analyze_product(self, product_data: Dict[str, Any], selected_agents: List[str] = None) -> Dict[str, Any]:
        """
        Analyze product with selected agents or all agents
        
        Args:
            product_data: Product information to analyze
            selected_agents: List of agent keys to use, or None for all agents
        
        Returns:
            Dictionary containing all agent analyses and summary
        """
        
        # Use selected agents or all agents
        agents_to_use = selected_agents or list(self.agents.keys())
        
        # Validate selected agents
        valid_agents = {k: self.agents[k] for k in agents_to_use if k in self.agents}
        
        if not valid_agents:
            raise ValueError("No valid agents selected")
        
        # Run analysis with all selected agents concurrently
        analysis_tasks = []
        for agent_key, agent in valid_agents.items():
            task = self._analyze_with_agent(agent_key, agent, product_data)
            analysis_tasks.append(task)
        
        # Wait for all analyses to complete
        agent_analyses = await asyncio.gather(*analysis_tasks, return_exceptions=True)
        
        # Process results
        results = {}
        successful_analyses = []
        
        for i, (agent_key, result) in enumerate(zip(valid_agents.keys(), agent_analyses)):
            if isinstance(result, Exception):
                results[agent_key] = {
                    "agent_name": valid_agents[agent_key].name,
                    "agent_role": valid_agents[agent_key].role,
                    "error": str(result),
                    "analysis": "Analysis failed due to technical error"
                }
            else:
                results[agent_key] = result
                successful_analyses.append(result)
        
        # Generate council summary
        council_summary = self._generate_council_summary(successful_analyses, product_data)
        
        return {
            "product_name": product_data.get('name', 'Unnamed Product'),
            "analysis_timestamp": self._get_timestamp(),
            "agents_consulted": len(valid_agents),
            "successful_analyses": len(successful_analyses),
            "agent_analyses": results,
            "council_summary": council_summary,
            "recommendations": self._extract_key_recommendations(successful_analyses)
        }
    
    async def _analyze_with_agent(self, agent_key: str, agent, product_data: Dict[str, Any]) -> Dict[str, Any]:
        """Run analysis with a single agent"""
        try:
            result = await agent.analyze(product_data)
            result["agent_key"] = agent_key
            return result
        except Exception as e:
            raise Exception(f"Agent {agent_key} failed: {str(e)}")
    
    def _generate_council_summary(self, analyses: List[Dict[str, Any]], product_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate a summary of the council's collective analysis"""
        
        if not analyses:
            return {
                "overall_assessment": "Unable to generate summary - no successful analyses",
                "confidence_score": 0.0,
                "key_themes": [],
                "critical_issues": []
            }
        
        # Calculate average confidence
        avg_confidence = sum(analysis.get('confidence', 0) for analysis in analyses) / len(analyses)
        
        # Extract common themes (simplified - could be enhanced with NLP)
        key_themes = []
        critical_issues = []
        
        for analysis in analyses:
            focus_areas = analysis.get('focus_areas', [])
            key_themes.extend(focus_areas)
        
        # Remove duplicates and take top themes
        unique_themes = list(set(key_themes))[:6]
        
        # Determine overall assessment
        if avg_confidence >= 0.8:
            assessment = "Strong product potential with solid foundation across key areas"
        elif avg_confidence >= 0.6:
            assessment = "Promising product with some areas requiring attention"
        elif avg_confidence >= 0.4:
            assessment = "Mixed assessment - significant improvements needed"
        else:
            assessment = "Major concerns identified across multiple areas"
        
        return {
            "overall_assessment": assessment,
            "confidence_score": round(avg_confidence, 2),
            "key_themes": unique_themes,
            "participating_experts": [analysis.get('agent_name') for analysis in analyses]
        }
    
    def _extract_key_recommendations(self, analyses: List[Dict[str, Any]]) -> List[str]:
        """Extract key recommendations from all analyses"""
        recommendations = []
        
        for analysis in analyses:
            agent_name = analysis.get('agent_name', 'Unknown')
            agent_role = analysis.get('agent_role', 'Expert')
            # This is a simplified extraction - could be enhanced with NLP
            recommendations.append(f"{agent_role} ({agent_name}): Review detailed analysis for specific recommendations")
        
        return recommendations
    
    def _get_timestamp(self) -> str:
        """Get current timestamp for the analysis"""
        from datetime import datetime
        return datetime.now().isoformat()
    
    def get_available_agents(self) -> Dict[str, Dict[str, str]]:
        """Return information about available agents for selection"""
        return {
            agent_key: {
                "name": agent.name,
                "role": agent.role,
                "expertise": agent.expertise,
                "focus_areas": agent.get_analysis_focus()
            }
            for agent_key, agent in self.agents.items()
        } 