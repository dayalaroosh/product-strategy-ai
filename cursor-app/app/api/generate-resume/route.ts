import { NextRequest, NextResponse } from 'next/server'

// Generate ATS-optimized resume content
const generateResumeContent = () => {
  return `AROOSH DAYAL
Senior AI Product Manager | B2B SaaS Expert
═══════════════════════════════════════════════════════════════════════════════
Email: dayalaroosh@gmail.com | Phone: +91-9550132970
LinkedIn: linkedin.com/in/aroosh-dayal-a015b59a | Location: Hyderabad, India

PROFESSIONAL SUMMARY
═══════════════════════════════════════════════════════════════════════════════
Senior AI Product Manager with 9+ years of experience in B2B SaaS platforms and enterprise AI solutions. Led product strategy for AI-powered platforms serving 300+ enterprise customers, driving $50M+ ARR growth. Expert in machine learning product development, multi-agent systems, and complex stakeholder management. Proven track record in Resource Management, Talent Intelligence, Field Service Management, and enterprise compliance platforms.

CORE COMPETENCIES
═══════════════════════════════════════════════════════════════════════════════
• AI/ML Product Management: TensorFlow, PyTorch, Scikit-learn, XGBoost, AutoGen, Multi-Agent Systems, NLP, Computer Vision, Recommendation Systems, MLOps, Model Deployment, AI Ethics

• B2B SaaS Expertise: Enterprise Product Strategy, B2B Sales Cycles, Customer Success, Revenue Growth, Product-Market Fit, Stakeholder Management, Cross-functional Leadership

• Product Management: Agile/Scrum, Roadmap Planning, User Research, A/B Testing, Data Analytics, KPI Optimization, Go-to-Market Strategy, Product Lifecycle Management

• Technical Skills: Python, SQL, PostgreSQL, AWS, GCP, Docker, Kubernetes, JIRA, Confluence, Mixpanel, Amplitude, Tableau, Figma

PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════════════════════

SENIOR AI PRODUCT MANAGER | EIGHTFOLD AI | January 2024 - Present
• Led AI Resource Management platform for 300+ enterprise customers, scaling from $1M to $50M+ ARR
• Managed complex stakeholder ecosystem across 15+ departments, ensuring alignment on AI product strategy
• Implemented machine learning algorithms for talent intelligence, improving matching accuracy by 35%
• Developed multi-agent AI systems for automated resource allocation, reducing manual effort by 60%
• Established MLOps pipeline and AI governance framework ensuring responsible AI deployment
• Achieved 40% increase in user engagement through data-driven AI feature optimization
• Led cross-functional teams of 20+ engineers, data scientists, and designers using agile methodologies

SENIOR PRODUCT MANAGER - GAMING SAAS | ZYNGA | February 2023 - September 2023
• Managed B2B compliance platform serving 119+ game studios across multiple markets
• Redesigned enterprise workflows and multi-tenant SaaS architecture, saving $3M+ annual revenue
• Led product strategy for gaming compliance solutions, ensuring regulatory adherence across regions
• Implemented advanced analytics and reporting features for enterprise customers
• Collaborated with legal and compliance teams to develop scalable B2B solutions

SENIOR PRODUCT MANAGER - ENTERPRISE SAAS | BHARTI AIRTEL | 2021 - 2023
• Owned Field Service Management platform (100K+ enterprise users, ₹700Cr+ account value)
• Led B2B product strategy for network operations across 22 telecom circles
• Implemented AI-powered predictive maintenance reducing network downtime by 25%
• Managed enterprise customer relationships and complex B2B sales cycles
• Won Chairman Award 2022 for digital innovation in enterprise products
• Improved B2B digital leads by 140% through ML-powered targeting and conversion optimization

LEAD PRODUCT ANALYST - B2B PLATFORM | BHARTI AIRTEL | 2019 - 2021
• Led analytics for enterprise customer acquisition platform serving B2B market
• Developed machine learning models for customer segmentation and targeting
• Implemented data pipeline architecture supporting real-time analytics for enterprise clients
• Collaborated with sales teams to optimize B2B customer acquisition funnel

BUSINESS ANALYST - ENTERPRISE ML | AMERICAN EXPRESS | 2017 - 2019
• Built XGBoost models for B2B customer targeting and risk assessment
• Managed enterprise client relationships worth $23M+ annual revenue
• Developed predictive models for customer lifetime value in B2B segment
• GCMA Superstar recognition (Top 6/250+ analysts) for outstanding performance
• Supported AI product launches across Asia-Pacific B2B markets

SOFTWARE DEVELOPER - ENTERPRISE SAAS | ORACLE | 2014 - 2015
• Enhanced Oracle CPQ (Configure, Price, Quote) software for enterprise sales teams
• Deep experience in B2B software architecture and enterprise customer workflows
• Developed scalable solutions for complex enterprise sales processes

EDUCATION
═══════════════════════════════════════════════════════════════════════════════
Master of Business Administration (MBA) | IIM Ahmedabad | 2013-2015
Specialization: Technology Management & AI Strategy

Bachelor of Technology - Computer Science Engineering | IIT Guwahati | 2009-2013
Focus: Machine Learning & Data Structures

KEY ACHIEVEMENTS & RECOGNITION
═══════════════════════════════════════════════════════════════════════════════
• Product Manager of the Year - Eightfold AI (2024)
• Chairman Award - Bharti Airtel (2022) for Enterprise Digital Innovation
• GCMA Superstar - American Express (2018) for B2B Analytics Excellence
• 50+ Employee Recognition Awards across organizations for product leadership
• Built and deployed multi-agent AI systems serving millions of enterprise users
• Led product initiatives generating $50M+ in enterprise revenue growth

CERTIFICATIONS
═══════════════════════════════════════════════════════════════════════════════
• Certified AI Product Manager (AIPM) - Product School (2023)
• AWS Certified Machine Learning - Specialty (2022)
• Google Cloud Professional ML Engineer (2022)
• Certified Scrum Product Owner (CSPO) - Scrum Alliance (2021)
• Deep Learning Specialization - Coursera/Stanford (2020)

TECHNICAL EXPERTISE
═══════════════════════════════════════════════════════════════════════════════
AI/ML Technologies: AutoGen Framework, Multi-Agent Systems, TensorFlow, PyTorch, Scikit-learn, XGBoost, Hugging Face, OpenAI GPT, BERT, Transformers, NLP, Computer Vision, Recommendation Systems, MLOps, Model Deployment, AI Ethics

Programming & Data: Python, R, SQL, JavaScript, Java, PostgreSQL, MongoDB, Apache Spark, Pandas, NumPy, Git, Docker, Kubernetes

Cloud & Infrastructure: AWS SageMaker, Google Cloud AI, Azure ML, MLflow, Kubeflow, Apache Airflow, CI/CD, Model Versioning, Feature Stores, Model Monitoring

Product Management Tools: JIRA, Confluence, Figma, Mixpanel, Amplitude, Tableau, Looker, ProductPlan, Aha!, Miro, Asana, Trello

B2B SaaS Specialization: Enterprise Architecture, Multi-tenant Systems, API Development, Compliance Platforms, Customer Success Tools, Enterprise Sales Cycles, Stakeholder Management

═══════════════════════════════════════════════════════════════════════════════
ATS-OPTIMIZED FOR AI PRODUCT MANAGER ROLES | UPDATED JANUARY 2025
═══════════════════════════════════════════════════════════════════════════════

This resume is specifically optimized for:
✓ Applicant Tracking Systems (ATS) with keyword-rich content
✓ AI Product Manager and Product Leadership roles
✓ B2B SaaS and Enterprise technology positions
✓ Machine Learning and AI-focused companies
✓ Senior Product Management and Director-level positions

Key ATS Optimization Features:
• Standard section headers (Professional Summary, Experience, Education, etc.)
• Keyword-dense content covering AI/ML, B2B SaaS, and Product Management
• Quantified achievements with specific metrics and impact
• Industry-standard formatting that ATS systems can easily parse
• Comprehensive technical skills section with relevant technologies
• Clear job titles and company names for easy identification
• Achievement-focused bullet points with action verbs and results`;
}

export async function GET() {
  try {
    const resumeContent = generateResumeContent()
    
    return new NextResponse(resumeContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': 'attachment; filename="Aroosh_Dayal_ATS_Resume.txt"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error generating resume:', error)
    return NextResponse.json(
      { error: 'Failed to generate resume' },
      { status: 500 }
    )
  }
}

export async function POST() {
  return GET()
} 