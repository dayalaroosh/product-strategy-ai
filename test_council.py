#!/usr/bin/env python3
import requests
import json

def test_strategy_council():
    """Test the Strategy Council API with sample product data"""
    
    # Test data for an AI language learning app
    test_product = {
        "name": "AI Language Learning App",
        "description": "Personalized language learning using AI conversations with native speakers",
        "target_market": "Young professionals (25-35) wanting to learn business languages",
        "key_features": "Real-time AI conversations, pronunciation feedback, business scenario practice"
    }
    
    print("🧪 Testing Product Strategy Council API...")
    print(f"📱 Product: {test_product['name']}")
    print("-" * 50)
    
    try:
        # Test council info endpoint
        print("1. Getting council information...")
        info_response = requests.get("http://localhost:8001/api/council/info")
        if info_response.status_code == 200:
            council_info = info_response.json()
            print(f"✅ Council has {council_info['total_agents']} agents available")
            
            # Show available agents
            for agent in council_info['council_members']:
                print(f"   - {agent['name']} ({agent['role']})")
        else:
            print(f"❌ Failed to get council info: {info_response.status_code}")
            return
        
        print("\n2. Running product analysis...")
        # Test analysis endpoint
        analysis_response = requests.post(
            "http://localhost:8001/api/council/analyze",
            json=test_product,
            headers={"Content-Type": "application/json"}
        )
        
        if analysis_response.status_code == 200:
            result = analysis_response.json()
            council_analysis = result['council_analysis']
            
            print(f"✅ Analysis completed successfully!")
            print(f"📊 Product: {council_analysis['product_name']}")
            print(f"👥 Agents consulted: {council_analysis['agents_consulted']}")
            print(f"✅ Successful analyses: {council_analysis['successful_analyses']}")
            
            # Show council summary
            summary = council_analysis['council_summary']
            print(f"\n📋 Council Summary:")
            print(f"   Assessment: {summary['overall_assessment']}")
            print(f"   Confidence: {summary['confidence_score']}")
            print(f"   Key themes: {', '.join(summary['key_themes'][:3])}...")
            
            # Show agent analyses
            print(f"\n🎯 Agent Insights:")
            for agent_key, analysis in council_analysis['agent_analyses'].items():
                if 'error' not in analysis:
                    print(f"   - {analysis['agent_name']}: Confidence {analysis['confidence']}")
                else:
                    print(f"   - {analysis['agent_name']}: ❌ {analysis['error']}")
            
            print(f"\n🎉 Strategy Council Test: SUCCESS!")
            
        else:
            print(f"❌ Analysis failed: {analysis_response.status_code}")
            print(f"Response: {analysis_response.text}")
    
    except Exception as e:
        print(f"❌ Test failed with error: {str(e)}")

if __name__ == "__main__":
    test_strategy_council() 