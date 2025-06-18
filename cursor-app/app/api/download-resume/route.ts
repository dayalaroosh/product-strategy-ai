import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Create a well-formatted HTML resume that can be easily converted to PDF by the browser
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Aroosh Dayal - Senior Product Manager Resume</title>
  <style>
    @page {
      size: A4;
      margin: 0.5in;
    }
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.3;
      color: #333;
      background: white;
      font-size: 9pt;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    .container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.3in;
      background: white;
    }
    
    .header {
      text-align: center;
      margin-bottom: 16px;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 12px;
    }
    
    .name {
      font-size: 20pt;
      font-weight: bold;
      color: #1e40af;
      margin-bottom: 4px;
    }
    
    .title {
      font-size: 12pt;
      color: #6b7280;
      margin-bottom: 6px;
    }
    
    .contact {
      font-size: 8pt;
      color: #4b5563;
    }
    
    .section {
      margin-bottom: 14px;
    }
    
    .section-title {
      font-size: 10pt;
      font-weight: bold;
      color: #1e40af;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 2px;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .experience-item {
      margin-bottom: 8px;
      page-break-inside: avoid;
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    
    .job-title {
      font-weight: bold;
      font-size: 9pt;
      color: #1f2937;
    }
    
    .company {
      font-weight: bold;
      color: #2563eb;
      font-size: 9pt;
    }
    
    .duration {
      color: #6b7280;
      font-size: 8pt;
      font-style: italic;
    }
    
    .achievement {
      margin: 2px 0;
      padding-left: 12px;
      position: relative;
      font-size: 8pt;
      line-height: 1.2;
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
      gap: 4px;
    }
    
    .skill-tag {
      background: #eff6ff;
      color: #1e40af;
      padding: 1px 6px;
      border-radius: 8px;
      font-size: 7pt;
      border: 1px solid #bfdbfe;
    }
    
    .summary {
      font-size: 9pt;
      line-height: 1.4;
      text-align: justify;
      margin-bottom: 12px;
      color: #374151;
    }
    
    .education-item {
      margin-bottom: 6px;
      font-size: 8pt;
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
      margin: 8px 0;
      flex-wrap: wrap;
    }
    
    .metric {
      text-align: center;
      flex: 1;
      min-width: 80px;
    }
    
    .metric-value {
      font-size: 10pt;
      font-weight: bold;
      color: #059669;
    }
    
    .metric-label {
      font-size: 7pt;
      color: #6b7280;
    }
    
    .two-column {
      display: flex;
      gap: 16px;
    }
    
    .column {
      flex: 1;
    }
    
    .compact-list {
      font-size: 8pt;
      line-height: 1.2;
    }
    
    @media print {
      body { -webkit-print-color-adjust: exact; }
      .container { padding: 0.3in; }
      .section { page-break-inside: avoid; }
    }
  </style>
  <script>
    window.onload = function() {
      // Auto-trigger print dialog for PDF generation
      setTimeout(function() {
        window.print();
      }, 1000);
    }
  </script>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="name">AROOSH DAYAL</div>
      <div class="title">Senior Product Manager • AI & Data-Driven Products</div>
      <div class="contact">
        dayalaroosh@gmail.com • +91-9550132970 • LinkedIn: aroosh-dayal-a015b59a • About Creator: product-strategy-ai.vercel.app/presentation?tab=about
      </div>
    </div>

    <!-- Professional Summary -->
    <div class="section">
      <div class="section-title">Professional Summary</div>
      <div class="summary">
        Results-driven Senior Product Manager with 9+ years across enterprise SaaS, consumer mobile, gaming, and fintech. Proven track record: $38M+ cumulative revenue impact, 100M+ users served, scaled products from 1 to 7 customers achieving $12M+ ARR. MBA from IIM Ahmedabad with strong technical foundation. Expertise in AI-driven products and cross-functional leadership.
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="section">
      <div class="section-title">Career Impact & Achievements (Cumulative)</div>
      <div class="metrics">
        <div class="metric">
          <div class="metric-value">$38M+</div>
          <div class="metric-label">Total Revenue Impact</div>
        </div>
        <div class="metric">
          <div class="metric-value">100M+</div>
          <div class="metric-label">Total Users Served</div>
        </div>
        <div class="metric">
          <div class="metric-value">24+</div>
          <div class="metric-label">Max Stakeholders (Single Role)</div>
        </div>
        <div class="metric">
          <div class="metric-value">15+</div>
          <div class="metric-label">Features Launched (Recent)</div>
        </div>
        <div class="metric">
          <div class="metric-value">7x</div>
          <div class="metric-label">Customer Growth (Eightfold)</div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="section">
      <div class="section-title">Professional Experience</div>
      
      <div class="experience-item">
        <div class="job-header">
          <div>
            <span class="job-title">Senior Product Manager</span> at <span class="company">Eightfold AI</span>
          </div>
          <div class="duration">Jan 2024 - Jun 2025</div>
        </div>
        <div class="achievement">Led Resource Management AI product, launched 15+ features, scaled 1→7 customers ($12M+ ARR)</div>
        <div class="achievement">50+ recognition shoutouts for ownership and excellence</div>
      </div>

      <div class="experience-item">
        <div class="job-header">
          <div>
            <span class="job-title">Senior Product Manager</span> at <span class="company">Zynga</span>
          </div>
          <div class="duration">Feb - Sep 2023</div>
        </div>
        <div class="achievement">Managed Compliance & Social products for 119+ game studios, saved $3M+ revenue</div>
        <div class="achievement">Redesigned opt-out flows, reduced operational overhead by 40%</div>
      </div>

      <div class="experience-item">
        <div class="job-header">
          <div>
            <span class="job-title">Senior Product Manager</span> at <span class="company">Bharti Airtel</span>
          </div>
          <div class="duration">2021 - 2023</div>
        </div>
        <div class="achievement">Managed Field Service Management platform (100K+ users, ₹700Cr+ account)</div>
        <div class="achievement">Won Chairman Award 2022 - 'Win with Digital', managed 24+ stakeholders</div>
      </div>

      <div class="experience-item">
        <div class="job-header">
          <div>
            <span class="job-title">Lead Product Analyst</span> at <span class="company">Bharti Airtel</span>
          </div>
          <div class="duration">2019 - 2021</div>
        </div>
        <div class="achievement">Led analytics for Airtel Thanks App (100M+ MAU), improved postpaid leads by 140%</div>
      </div>

      <div class="experience-item">
        <div class="job-header">
          <div>
            <span class="job-title">Business Analyst II</span> at <span class="company">American Express</span>
          </div>
          <div class="duration">2017 - 2019</div>
        </div>
        <div class="achievement">Built XGBoost models driving $23M+ revenue, GCMA Superstar (Top 6/250+)</div>
      </div>

      <div class="experience-item">
        <div class="job-header">
          <div>
            <span class="job-title">Software Developer II</span> at <span class="company">Oracle</span>
          </div>
          <div class="duration">2014 - 2015</div>
        </div>
        <div class="achievement">Enhanced Oracle CPQ software, achieved 95% in product training</div>
      </div>
    </div>

    <!-- Two Column Layout for remaining sections -->
    <div class="two-column">
      <div class="column">
        <!-- Education -->
        <div class="section">
          <div class="section-title">Education</div>
          <div class="education-item">
            <div class="degree">PGDM (MBA)</div>
            <div class="institution">IIM Ahmedabad</div>
            <div class="duration">2015-2017</div>
          </div>
          <div class="education-item">
            <div class="degree">B.Tech Electronics</div>
            <div class="institution">IIT Guwahati</div>
            <div class="duration">2010-2014</div>
          </div>
        </div>

        <!-- Technical Skills -->
        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <span class="skill-tag">Product Strategy</span>
            <span class="skill-tag">AutoGen</span>
            <span class="skill-tag">Multi-Agent AI</span>
            <span class="skill-tag">GPT-4</span>
            <span class="skill-tag">XGBoost</span>
            <span class="skill-tag">Machine Learning</span>
            <span class="skill-tag">Data Analytics</span>
            <span class="skill-tag">Stakeholder Mgmt</span>
            <span class="skill-tag">Go-to-Market</span>
          </div>
        </div>

        <!-- Awards -->
        <div class="section">
          <div class="section-title">Recognition</div>
          <div class="compact-list">
            <div class="achievement">Chairman Award 2022 - Bharti Airtel</div>
            <div class="achievement">GCMA Superstar - American Express</div>
            <div class="achievement">50+ Excellence Shoutouts - Eightfold AI</div>
          </div>
        </div>
      </div>

      <div class="column">
        <!-- Domain Expertise -->
        <div class="section">
          <div class="section-title">Domain Expertise</div>
          <div class="compact-list">
            <div class="achievement">Enterprise SaaS & AI Products</div>
            <div class="achievement">Consumer Mobile & Gaming (100M+ MAU)</div>
            <div class="achievement">Financial Services & Telecom</div>
            <div class="achievement">B2B & B2C Product Leadership</div>
          </div>
        </div>

        <!-- Side Projects -->
        <div class="section">
          <div class="section-title">Notable Projects</div>
          <div class="compact-list">
            <div class="achievement">AI Product Strategy Council - Multi-agent system</div>
            <div class="achievement">Built with AutoGen + GPT-4</div>
            <div class="achievement">Live at: product-strategy-ai.vercel.app</div>
          </div>
        </div>

        <!-- Career Focus -->
        <div class="section">
          <div class="section-title">Career Focus</div>
          <div style="font-size: 8pt; line-height: 1.3;">
            Seeking Principal PM, Group PM, or Product Director roles to drive product success at scale using cross-functional experience and technical background.
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 12px; font-size: 7pt; color: #6b7280;">
      Updated June 2025 • Available for Principal PM | Group PM | Product Director opportunities
    </div>
  </div>
</body>
</html>`;

    // Return HTML that auto-triggers print dialog for PDF generation
    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': 'inline; filename="Aroosh_Dayal_Resume.html"',
      },
    });
  } catch (error) {
    console.error('Error generating resume:', error);
    
    // Fallback error page
    const fallbackHtml = `
    <html><body style="font-family: Arial; padding: 20px; text-align: center;">
      <h1>Resume Download</h1>
      <p>Please contact <a href="mailto:dayalaroosh@gmail.com">dayalaroosh@gmail.com</a> for the latest resume.</p>
      <p style="color: #666; font-size: 12px;">Technical issue: ${error}</p>
      <button onclick="window.close()" style="padding: 10px 20px; margin-top: 20px;">Close</button>
    </body></html>`;
    
    return new NextResponse(fallbackHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': 'inline; filename="Resume_Contact.html"',
      },
    });
  }
} 