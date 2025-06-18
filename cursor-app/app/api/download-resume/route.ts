import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Create a comprehensive HTML template that will be converted to PDF
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Aroosh Dayal - Senior Product Manager Resume</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.4;
      color: #333;
      background: white;
      font-size: 10pt;
    }
    
    .container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.5in;
      background: white;
    }
    
    .header {
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 15px;
    }
    
    .name {
      font-size: 24pt;
      font-weight: bold;
      color: #1e40af;
      margin-bottom: 5px;
    }
    
    .title {
      font-size: 14pt;
      color: #6b7280;
      margin-bottom: 8px;
    }
    
    .contact {
      font-size: 9pt;
      color: #4b5563;
    }
    
    .section {
      margin-bottom: 18px;
    }
    
    .section-title {
      font-size: 12pt;
      font-weight: bold;
      color: #1e40af;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 3px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .experience-item {
      margin-bottom: 12px;
    }
    
    .job-title {
      font-weight: bold;
      font-size: 11pt;
      color: #1f2937;
    }
    
    .company {
      font-weight: bold;
      color: #2563eb;
      font-size: 10pt;
    }
    
    .duration {
      color: #6b7280;
      font-size: 9pt;
      font-style: italic;
    }
    
    .achievement {
      margin: 3px 0;
      padding-left: 15px;
      position: relative;
    }
    
    .achievement:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: bold;
    }
    
    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-tag {
      background: #eff6ff;
      color: #1e40af;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 8pt;
      border: 1px solid #bfdbfe;
    }
    
    .summary {
      font-size: 10pt;
      line-height: 1.5;
      text-align: justify;
      margin-bottom: 15px;
      color: #374151;
    }
    
    .education-item {
      margin-bottom: 8px;
    }
    
    .degree {
      font-weight: bold;
      color: #1f2937;
    }
    
    .institution {
      color: #2563eb;
      font-weight: 600;
    }
    
    .metrics {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      flex-wrap: wrap;
    }
    
    .metric {
      text-align: center;
      flex: 1;
      min-width: 120px;
    }
    
    .metric-value {
      font-size: 12pt;
      font-weight: bold;
      color: #059669;
    }
    
    .metric-label {
      font-size: 8pt;
      color: #6b7280;
    }
    
    .two-column {
      display: flex;
      gap: 20px;
    }
    
    .column {
      flex: 1;
    }
    
    @media print {
      body { -webkit-print-color-adjust: exact; }
      .container { padding: 0.3in; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="name">AROOSH DAYAL</div>
      <div class="title">Senior Product Manager</div>
      <div class="contact">
        dayalaroosh@gmail.com • +91-9550132970 • LinkedIn: linkedin.com/in/aroosh-dayal-a015b59a/ • India
      </div>
    </div>

    <!-- Professional Summary -->
    <div class="section">
      <div class="section-title">Professional Summary</div>
      <div class="summary">
        Results-driven Senior Product Manager with 9+ years of experience building products across enterprise SaaS, consumer mobile, gaming, and fintech. Proven track record of driving growth, optimizing user experiences, and managing complex stakeholder ecosystems. Strong technical foundation with MBA from IIM Ahmedabad. Expertise in AI-driven products, cross-functional leadership, and strategic product decisions at scale.
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="section">
      <div class="section-title">Impact & Achievements</div>
      <div class="metrics">
        <div class="metric">
          <div class="metric-value">$38M+</div>
          <div class="metric-label">Revenue Impact</div>
        </div>
        <div class="metric">
          <div class="metric-value">100M+</div>
          <div class="metric-label">Users Served</div>
        </div>
        <div class="metric">
          <div class="metric-value">24+</div>
          <div class="metric-label">Stakeholders Managed</div>
        </div>
        <div class="metric">
          <div class="metric-value">15+</div>
          <div class="metric-label">Features Launched</div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="section">
      <div class="section-title">Professional Experience</div>
      
      <div class="experience-item">
        <div class="job-title">Senior Product Manager</div>
        <div class="company">Eightfold AI</div>
        <div class="duration">January 2024 - June 2025</div>
        <div class="achievement">Led Resource Management AI product, launched 15+ features driving significant user adoption</div>
        <div class="achievement">Scaled customer base from 1 to 7 customers, achieving $12M+ ARR growth</div>
        <div class="achievement">Received 50+ recognition shoutouts for ownership and excellence</div>
        <div class="achievement">Managed cross-functional teams across engineering, design, sales, and customer success</div>
      </div>

      <div class="experience-item">
        <div class="job-title">Senior Product Manager</div>
        <div class="company">Zynga</div>
        <div class="duration">February 2023 - September 2023</div>
        <div class="achievement">Managed Centralized Compliance & Social products for 119+ game studios</div>
        <div class="achievement">Redesigned opt-out flows, saving $3M+ in revenue through improved user retention</div>
        <div class="achievement">Led cross-functional initiatives across multiple business units and gaming portfolio</div>
        <div class="achievement">Streamlined compliance processes, reducing operational overhead by 40%</div>
      </div>

      <div class="experience-item">
        <div class="job-title">Senior Product Manager</div>
        <div class="company">Bharti Airtel</div>
        <div class="duration">2021 - 2023</div>
        <div class="achievement">Managed Field Service Management platform (100K+ users, ₹700Cr+ account value)</div>
        <div class="achievement">Won Chairman Award 2022 - 'Win with Digital' for outstanding product leadership</div>
        <div class="achievement">Led product strategy for enterprise solutions serving India's largest telecom network</div>
        <div class="achievement">Managed 24+ stakeholders across technology and business teams</div>
      </div>

      <div class="experience-item">
        <div class="job-title">Lead Product Analyst</div>
        <div class="company">Bharti Airtel</div>
        <div class="duration">2019 - 2021</div>
        <div class="achievement">Led analytics for Airtel Thanks App serving 100M+ monthly active users</div>
        <div class="achievement">Improved postpaid digital leads by 140% through data-driven optimization</div>
        <div class="achievement">Built comprehensive analytics frameworks for product decision-making</div>
        <div class="achievement">Developed user segmentation models driving personalized experiences</div>
      </div>

      <div class="experience-item">
        <div class="job-title">Business Analyst II</div>
        <div class="company">American Express</div>
        <div class="duration">2017 - 2019</div>
        <div class="achievement">Built XGBoost models for business targeting, driving $23M+ revenue impact</div>
        <div class="achievement">Achieved GCMA Superstar recognition (Top 6 out of 250+ analysts)</div>
        <div class="achievement">Developed machine learning models for customer segmentation and risk assessment</div>
        <div class="achievement">Led cross-functional analytics projects across multiple business lines</div>
      </div>

      <div class="experience-item">
        <div class="job-title">Software Developer II</div>
        <div class="company">Oracle</div>
        <div class="duration">2014 - 2015</div>
        <div class="achievement">Enhanced Oracle CPQ software with new features and performance improvements</div>
        <div class="achievement">Achieved 95% score in comprehensive product training and certification</div>
        <div class="achievement">Collaborated with global teams on enterprise software development</div>
      </div>
    </div>

    <!-- Education -->
    <div class="section">
      <div class="section-title">Education</div>
      <div class="education-item">
        <div class="degree">Post Graduate Diploma in Management (PGDM)</div>
        <div class="institution">IIM Ahmedabad</div>
        <div class="duration">2015 - 2017 • Student exchange at EM Lyon Business School, France</div>
      </div>
      <div class="education-item">
        <div class="degree">Bachelor of Technology (B.Tech) - Electronics & Communication</div>
        <div class="institution">IIT Guwahati</div>
        <div class="duration">2010 - 2014</div>
      </div>
    </div>

    <!-- Two Column Layout for Skills and Additional Info -->
    <div class="two-column">
      <div class="column">
        <!-- Technical Skills -->
        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <span class="skill-tag">Product Strategy</span>
            <span class="skill-tag">AutoGen</span>
            <span class="skill-tag">Multi-Agent AI</span>
            <span class="skill-tag">OpenAI GPT-4</span>
            <span class="skill-tag">LangChain</span>
            <span class="skill-tag">XGBoost</span>
            <span class="skill-tag">Machine Learning</span>
            <span class="skill-tag">Data Analytics</span>
            <span class="skill-tag">Oracle CPQ</span>
            <span class="skill-tag">Stakeholder Management</span>
            <span class="skill-tag">Go-to-Market</span>
            <span class="skill-tag">Cross-functional Leadership</span>
          </div>
        </div>

        <!-- Domain Expertise -->
        <div class="section">
          <div class="section-title">Domain Expertise</div>
          <div class="achievement">Enterprise SaaS & AI Products</div>
          <div class="achievement">Consumer Mobile & Gaming (100M+ MAU)</div>
          <div class="achievement">Financial Services & Telecom</div>
          <div class="achievement">B2B & B2C Product Leadership</div>
        </div>
      </div>

      <div class="column">
        <!-- Awards & Recognition -->
        <div class="section">
          <div class="section-title">Awards & Recognition</div>
          <div class="achievement">Chairman Award 2022 - Bharti Airtel</div>
          <div class="achievement">GCMA Superstar - American Express</div>
          <div class="achievement">50+ Excellence Shoutouts - Eightfold AI</div>
          <div class="achievement">Product Leadership Recognition</div>
        </div>

        <!-- Side Projects -->
        <div class="section">
          <div class="section-title">Notable Projects</div>
          <div class="achievement">AI Product Strategy Council - Multi-agent system for early-stage product decisions</div>
          <div class="achievement">Built using AutoGen framework and OpenAI GPT-4</div>
          <div class="achievement">Deployed at: product-strategy-ai.vercel.app</div>
        </div>

        <!-- Career Objective -->
        <div class="section">
          <div class="section-title">Career Focus</div>
          <div style="font-size: 9pt; line-height: 1.4;">
            Seeking Principal PM, Group PM, or Product Director roles where I can leverage my proven track record of driving growth, managing complex stakeholder ecosystems, and building products at scale.
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 15px; font-size: 8pt; color: #6b7280;">
      Updated June 2025 • Available for Principal PM | Group PM | Product Director opportunities
    </div>
  </div>
</body>
</html>`;

    // For now, return the HTML content with proper headers for PDF download
    // In a production environment, you'd use a service like Puppeteer to convert HTML to PDF
    const response = new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': 'attachment; filename="Aroosh_Dayal_Product_Manager_Resume.html"',
      },
    });

    return response;
  } catch (error) {
    console.error('Error generating resume:', error);
    return NextResponse.json({ error: 'Failed to generate resume' }, { status: 500 });
  }
} 