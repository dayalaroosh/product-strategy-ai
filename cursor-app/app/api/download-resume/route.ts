import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For now, return a simple text-based resume that browsers can download
    // In production, you'd use a PDF generation library like puppeteer or jsPDF
    
    const resumeContent = `
AROOSH DAYAL
Senior Product Manager | Open to Principal PM | Group PM | Product Director Roles
dayalaroosh@gmail.com | +91-9550132970 | LinkedIn: linkedin.com/in/aroosh-dayal-a015b59a/

PROFESSIONAL SUMMARY
9+ years building products across enterprise SaaS, consumer mobile, gaming, and fintech. Proven track record of driving growth, optimizing user experiences, and managing complex stakeholder ecosystems. Strong technical foundation with MBA from IIM Ahmedabad. Ready to lead at Principal PM, Group PM, or Product Director level.

EXPERIENCE

Senior Product Manager | Eightfold AI (Jan 2024 - Jun 2025)
• Resource Management AI product, launched 15+ features
• Scaled from 1 to 7 customers achieving $12M+ ARR
• 50+ recognition shoutouts for ownership and excellence
• Led cross-functional teams across engineering, design, and sales

Senior Product Manager | Zynga (Feb 2023 - Sep 2023)  
• Centralized Compliance & Social products for 119+ game studios
• Redesigned opt-out flows saving $3M+ revenue
• Cross-functional leadership across gaming portfolio
• Managed stakeholder relationships across multiple business units

Senior Product Manager | Bharti Airtel (2021-2023)
• Managed Field Service Management platform (100K+ users, ₹700Cr+ account)
• Won Chairman Award 2022 - 'Win with Digital'
• Led product strategy for enterprise solutions
• Managed 24+ stakeholders across technology and business teams

Lead Product Analyst | Bharti Airtel (2019-2021)
• Led analytics for Airtel Thanks App (100M+ MAU)
• Improved postpaid digital leads by 140%
• Data-driven product optimization and growth
• Built comprehensive analytics frameworks for product decisions

Business Analyst II | American Express (2017-2019)
• Built XGBoost models for business targeting
• GCMA Superstar recognition (Top 6/250+)
• $23M+ revenue impact through analytics
• Developed machine learning models for customer segmentation

Software Developer II | Oracle (2014-2015)
• Enhanced Oracle CPQ software
• Achieved 95% in product training
• Technical foundation in enterprise software
• Full-stack development and system integration

EDUCATION
PGDM | IIM Ahmedabad (2015-2017) - Student exchange at EM Lyon Business School, France
B.Tech Electronics & Communication | IIT Guwahati (2010-2014)

KEY ACHIEVEMENTS & IMPACT
• Revenue Growth: $12M+ ARR growth (Eightfold), $3M+ saved (Zynga), $23M+ impact (AmEx)
• Scale Management: 100M+ MAU (Airtel App), 100K+ users (FSM platform), 119+ game studios (Zynga)
• Leadership: 24+ stakeholders managed, 10+ cross-functional domains
• Recognition: Chairman Award 2022, GCMA Superstar, 50+ shoutouts for excellence

TECHNICAL SKILLS
• AI/ML: AutoGen, Multi-Agent Systems, OpenAI GPT-4, LangChain, XGBoost, Machine Learning
• Product Management: Product Strategy, Stakeholder Management, Go-to-Market, Cross-functional Leadership
• Analytics: Business Analytics, Customer Segmentation, Data-driven Decision Making
• Development: Oracle CPQ, Software Development, Electronics Engineering, System Architecture

LEADERSHIP EXPERIENCE
• Led cross-functional teams of 10+ people across engineering, design, sales, and marketing
• Managed complex stakeholder ecosystems with competing priorities and timelines
• Drove product vision and strategy across multiple business units and customer segments
• Mentored junior product managers and analysts on data-driven product development

SIDE PROJECT
AI Product Strategy Council - Multi-agent AI system for early-stage product strategy decisions
• Built using AutoGen framework and OpenAI GPT-4
• Helps PMs make strategic decisions with limited user data
• Deployed at: https://product-strategy-ai.vercel.app/
• Solves critical challenge for early-stage companies with 0-50 customers

CAREER OBJECTIVE
Seeking Principal PM, Group PM, or Product Director role where I can leverage my proven track record of driving growth, managing complex stakeholder ecosystems, and building products at scale. Ready to lead larger teams and drive strategic product decisions across multiple domains.
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