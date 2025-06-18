import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

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
    // Create HTML content for the resume with professional styling
    const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Aroosh Dayal - Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.4;
      color: #2d3748;
      background: white;
      padding: 40px;
      font-size: 11px;
    }
    
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 3px solid #3182ce;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      margin: -40px -40px 30px -40px;
    }
    
    .name {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 8px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }
    
    .title {
      font-size: 18px;
      margin-bottom: 12px;
      font-weight: 600;
      opacity: 0.95;
    }
    
    .contact {
      font-size: 12px;
      line-height: 1.5;
      opacity: 0.9;
    }
    
    .section {
      margin-bottom: 25px;
      page-break-inside: avoid;
    }
    
    .section-title {
      font-size: 16px;
      font-weight: bold;
      color: #1a365d;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      padding-bottom: 5px;
      border-bottom: 2px solid #3182ce;
      position: relative;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 50px;
      height: 2px;
      background: #667eea;
    }
    
    .summary {
      font-size: 12px;
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 15px;
      background: #f7fafc;
      padding: 15px;
      border-left: 4px solid #3182ce;
      border-radius: 0 8px 8px 0;
    }
    
    .job {
      margin-bottom: 18px;
      padding: 15px;
      background: #f9f9f9;
      border-radius: 8px;
      border-left: 4px solid #3182ce;
      page-break-inside: avoid;
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }
    
    .job-title {
      font-size: 14px;
      font-weight: bold;
      color: #1a365d;
      margin-bottom: 2px;
    }
    
    .company {
      font-size: 12px;
      color: #3182ce;
      font-weight: 600;
    }
    
    .date {
      font-size: 11px;
      color: #718096;
      font-weight: 500;
      background: #e2e8f0;
      padding: 4px 8px;
      border-radius: 4px;
    }
    
    .achievement {
      font-size: 11px;
      margin-bottom: 4px;
      padding-left: 12px;
      line-height: 1.4;
      position: relative;
    }
    
    .achievement::before {
      content: '▪';
      color: #3182ce;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    .competencies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 15px;
    }
    
    .competency-item {
      font-size: 11px;
      padding: 10px;
      background: #f7fafc;
      border-radius: 6px;
      border-left: 3px solid #3182ce;
      line-height: 1.4;
    }
    
    .competency-title {
      font-weight: bold;
      color: #1a365d;
      margin-bottom: 5px;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    
    .skill-category {
      background: #f7fafc;
      padding: 12px;
      border-radius: 6px;
      border-left: 3px solid #3182ce;
    }
    
    .skill-title {
      font-size: 12px;
      font-weight: bold;
      color: #1a365d;
      margin-bottom: 6px;
    }
    
    .skill-list {
      font-size: 10px;
      line-height: 1.4;
    }
    
    .education-item {
      margin-bottom: 12px;
      padding: 12px;
      background: #f7fafc;
      border-radius: 6px;
      border-left: 3px solid #3182ce;
    }
    
    .degree {
      font-size: 12px;
      font-weight: bold;
      color: #1a365d;
      margin-bottom: 2px;
    }
    
    .institution {
      font-size: 11px;
      color: #3182ce;
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    .grad-date {
      font-size: 10px;
      color: #718096;
    }
    
    .achievement-item {
      font-size: 11px;
      margin-bottom: 4px;
      line-height: 1.4;
      padding-left: 12px;
      position: relative;
    }
    
    .achievement-item::before {
      content: '★';
      color: #3182ce;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    .certification-item {
      font-size: 11px;
      margin-bottom: 4px;
      line-height: 1.4;
      padding-left: 12px;
      position: relative;
    }
    
    .certification-item::before {
      content: '✓';
      color: #38a169;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    @media print {
      body { padding: 20px; }
      .section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">AROOSH DAYAL</div>
    <div class="title">Senior AI Product Manager</div>
    <div class="contact">
      📧 dayalaroosh@gmail.com | 📱 +91-9550132970<br>
      🔗 linkedin.com/in/aroosh-dayal-a015b59a | 📍 Hyderabad, India
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <div class="summary">
      Senior AI Product Manager with 9+ years of experience in AI/ML platforms, enterprise solutions, and complex stakeholder management. Led product strategy for AI-powered platforms serving 300+ enterprise customers, driving $50M+ ARR growth. Expert in machine learning product development, multi-agent systems, and scaling products from concept to market leadership. Proven track record across Resource Management, Talent Intelligence, Field Service Management, and enterprise compliance platforms.
    </div>
  </div>

  <div class="section">
    <div class="section-title">Core Competencies</div>
    <div class="competencies">
      <div class="competency-item">
        <div class="competency-title">AI/ML Product Management</div>
        TensorFlow, PyTorch, Scikit-learn, XGBoost, AutoGen, Multi-Agent Systems, NLP, Computer Vision, MLOps, Model Deployment
      </div>
      <div class="competency-item">
        <div class="competency-title">Product Management</div>
        Agile/Scrum, Roadmap Planning, User Research, A/B Testing, Data Analytics, KPI Optimization, Go-to-Market Strategy
      </div>
      <div class="competency-item">
        <div class="competency-title">Enterprise Solutions</div>
        Stakeholder Management, Cross-functional Leadership, Complex Product Cycles, Customer Success, Revenue Growth
      </div>
      <div class="competency-item">
        <div class="competency-title">Technical Skills</div>
        Python, SQL, PostgreSQL, AWS, GCP, Docker, Kubernetes, JIRA, Confluence, Mixpanel, Amplitude, Tableau
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Experience</div>
    
    <div class="job">
      <div class="job-header">
        <div>
          <div class="job-title">Senior AI Product Manager</div>
          <div class="company">Eightfold AI</div>
        </div>
        <div class="date">January 2024 - Present</div>
      </div>
      <div class="achievement">Led AI Resource Management platform for 300+ enterprise customers, scaling from $1M to $50M+ ARR</div>
      <div class="achievement">Managed complex stakeholder ecosystem across 15+ departments, ensuring alignment on AI product strategy</div>
      <div class="achievement">Implemented machine learning algorithms for talent intelligence, improving matching accuracy by 35%</div>
      <div class="achievement">Developed multi-agent AI systems for automated resource allocation, reducing manual effort by 60%</div>
      <div class="achievement">Established MLOps pipeline and AI governance framework ensuring responsible AI deployment</div>
      <div class="achievement">Achieved 40% increase in user engagement through data-driven AI feature optimization</div>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <div class="job-title">Senior Product Manager - Gaming</div>
          <div class="company">Zynga</div>
        </div>
        <div class="date">February 2023 - September 2023</div>
      </div>
      <div class="achievement">Managed compliance platform serving 119+ game studios across multiple markets</div>
      <div class="achievement">Redesigned enterprise workflows and multi-tenant architecture, saving $3M+ annual revenue</div>
      <div class="achievement">Led product strategy for gaming compliance solutions, ensuring regulatory adherence across regions</div>
      <div class="achievement">Implemented advanced analytics and reporting features for enterprise customers</div>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <div class="job-title">Senior Product Manager - Enterprise</div>
          <div class="company">Bharti Airtel</div>
        </div>
        <div class="date">2021 - 2023</div>
      </div>
      <div class="achievement">Owned Field Service Management platform (100K+ enterprise users, ₹700Cr+ account value)</div>
      <div class="achievement">Led product strategy for network operations across 22 telecom circles</div>
      <div class="achievement">Implemented AI-powered predictive maintenance reducing network downtime by 25%</div>
      <div class="achievement">Won Chairman Award 2022 for digital innovation in enterprise products</div>
      <div class="achievement">Improved digital leads by 140% through ML-powered targeting and conversion optimization</div>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <div class="job-title">Lead Product Analyst</div>
          <div class="company">Bharti Airtel</div>
        </div>
        <div class="date">2019 - 2021</div>
      </div>
      <div class="achievement">Led analytics for enterprise customer acquisition platform</div>
      <div class="achievement">Developed machine learning models for customer segmentation and targeting</div>
      <div class="achievement">Implemented data pipeline architecture supporting real-time analytics for enterprise clients</div>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <div class="job-title">Business Analyst - Enterprise ML</div>
          <div class="company">American Express</div>
        </div>
        <div class="date">2017 - 2019</div>
      </div>
      <div class="achievement">Built XGBoost models for customer targeting and risk assessment</div>
      <div class="achievement">Managed enterprise client relationships worth $23M+ annual revenue</div>
      <div class="achievement">GCMA Superstar recognition (Top 6/250+ analysts) for outstanding performance</div>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <div class="job-title">Software Developer - Enterprise</div>
          <div class="company">Oracle</div>
        </div>
        <div class="date">2014 - 2015</div>
      </div>
      <div class="achievement">Enhanced Oracle CPQ (Configure, Price, Quote) software for enterprise sales teams</div>
      <div class="achievement">Deep experience in enterprise software architecture and customer workflows</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="education-item">
      <div class="degree">Master of Business Administration (MBA)</div>
      <div class="institution">Indian Institute of Management, Ahmedabad</div>
      <div class="grad-date">2013-2015 | Specialization: Technology Management & AI Strategy</div>
    </div>
    <div class="education-item">
      <div class="degree">Bachelor of Technology - Computer Science Engineering</div>
      <div class="institution">Indian Institute of Technology, Guwahati</div>
      <div class="grad-date">2009-2013 | Focus: Machine Learning & Data Structures</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Key Achievements & Recognition</div>
    <div class="achievement-item">Product Manager of the Year - Eightfold AI (2024)</div>
    <div class="achievement-item">Chairman Award - Bharti Airtel (2022) for Enterprise Digital Innovation</div>
    <div class="achievement-item">GCMA Superstar - American Express (2018) for Analytics Excellence</div>
    <div class="achievement-item">50+ Employee Recognition Awards across organizations for product leadership</div>
    <div class="achievement-item">Built and deployed multi-agent AI systems serving millions of users</div>
    <div class="achievement-item">Led product initiatives generating $50M+ in revenue growth</div>
  </div>

  <div class="section">
    <div class="section-title">Technical Expertise</div>
    <div class="skills-grid">
      <div class="skill-category">
        <div class="skill-title">AI/ML Technologies</div>
        <div class="skill-list">AutoGen Framework, Multi-Agent Systems, TensorFlow, PyTorch, Scikit-learn, XGBoost, Hugging Face, OpenAI GPT, BERT, NLP, Computer Vision, MLOps</div>
      </div>
      <div class="skill-category">
        <div class="skill-title">Programming & Data</div>
        <div class="skill-list">Python, R, SQL, JavaScript, PostgreSQL, MongoDB, Apache Spark, Pandas, NumPy, Git, Docker, Kubernetes</div>
      </div>
      <div class="skill-category">
        <div class="skill-title">Cloud & Infrastructure</div>
        <div class="skill-list">AWS SageMaker, Google Cloud AI, Azure ML, MLflow, Kubeflow, Apache Airflow, CI/CD, Model Monitoring</div>
      </div>
      <div class="skill-category">
        <div class="skill-title">Product Management Tools</div>
        <div class="skill-list">JIRA, Confluence, Figma, Mixpanel, Amplitude, Tableau, Looker, ProductPlan, Aha!, Miro, Asana</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Certifications</div>
    <div class="certification-item">Certified AI Product Manager (AIPM) - Product School (2023)</div>
    <div class="certification-item">AWS Certified Machine Learning - Specialty (2022)</div>
    <div class="certification-item">Google Cloud Professional ML Engineer (2022)</div>
    <div class="certification-item">Certified Scrum Product Owner (CSPO) - Scrum Alliance (2021)</div>
    <div class="certification-item">Deep Learning Specialization - Coursera/Stanford (2020)</div>
  </div>
</body>
</html>`;

    // Launch Puppeteer and generate PDF
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setContent(resumeHTML, { waitUntil: 'networkidle0' });
    
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    });
    
    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Aroosh_Dayal_Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF resume' },
      { status: 500 }
    )
  }
}

export async function POST() {
  return GET()
} 