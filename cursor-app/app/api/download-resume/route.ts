import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For now, return a simple text-based resume that browsers can download
    // In production, you'd use a PDF generation library like puppeteer or jsPDF
    
    const resumeContent = `
AROOSH DAYAL
Senior Product Manager | Open to Principal PM | Group PM | Product Director Roles
dayalaroosh@gmail.com | +91-9818264466 | LinkedIn: linkedin.com/in/aroosh-dayal-a015b59a/

PROFESSIONAL SUMMARY
9+ years building products across enterprise SaaS, consumer mobile, gaming, and fintech. Proven track record of driving growth, optimizing user experiences, and managing complex stakeholder ecosystems. Strong technical foundation with MBA from IIM Ahmedabad.

EXPERIENCE

Senior Product Manager | Eightfold AI (Jan 2024 - Jun 2025)
• Resource Management AI product, launched 15+ features
• Scaled from 1 to 7 customers achieving $12M+ ARR
• 50+ recognition shoutouts for ownership and excellence

Senior Product Manager | Zynga (Feb 2023 - Sep 2023)  
• Centralized Compliance & Social products for 119+ game studios
• Redesigned opt-out flows saving $3M+ revenue
• Cross-functional leadership across gaming portfolio

Senior Product Manager | Bharti Airtel (2021-2023)
• Managed Field Service Management platform (100K+ users, ₹700Cr+ account)
• Won Chairman Award 2022 - 'Win with Digital'
• Led product strategy for enterprise solutions

Lead Product Analyst | Bharti Airtel (2019-2021)
• Led analytics for Airtel Thanks App (100M+ MAU)
• Improved postpaid digital leads by 140%
• Data-driven product optimization and growth

Business Analyst II | American Express (2017-2019)
• Built XGBoost models for business targeting
• GCMA Superstar recognition (Top 6/250+)
• $23M+ revenue impact through analytics

Software Developer II | Oracle (2014-2015)
• Enhanced Oracle CPQ software
• Achieved 95% in product training
• Technical foundation in enterprise software

EDUCATION
PGDM | IIM Ahmedabad (2015-2017) - Student exchange at EM Lyon Business School, France
B.Tech Electronics & Communication | IIT Guwahati (2010-2014)

KEY ACHIEVEMENTS
• Revenue Impact: $12M+ ARR growth (Eightfold), $3M+ saved (Zynga), $23M+ impact (AmEx)
• Scale: 100M+ MAU (Airtel App), 100K+ users (FSM platform), 24+ stakeholders managed
• Recognition: Chairman Award 2022, GCMA Superstar, 50+ shoutouts for excellence

TECHNICAL SKILLS
• AI/ML: AutoGen, Multi-Agent Systems, OpenAI GPT-4, LangChain, XGBoost
• Product: Product Strategy, Stakeholder Management, Go-to-Market, Cross-functional Leadership
• Analytics: Machine Learning, Business Analytics, Customer Segmentation
• Development: Oracle CPQ, Software Development, Electronics Engineering

SIDE PROJECT
AI Product Strategy Council - Multi-agent AI system for early-stage product strategy decisions
Built using AutoGen framework, helping PMs make strategic decisions with limited user data
`;

    // Create response with proper headers for file download
    const response = new NextResponse(resumeContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="Aroosh_Dayal_Product_Manager_Resume.txt"',
      },
    });

    return response;
  } catch (error) {
    console.error('Error generating resume:', error);
    return NextResponse.json({ error: 'Failed to generate resume' }, { status: 500 });
  }
} 