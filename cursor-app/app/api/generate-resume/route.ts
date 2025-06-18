import { NextRequest, NextResponse } from 'next/server'
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from '@react-pdf/renderer'
import React from 'react'

// ATS-Friendly Professional color scheme
const colors = {
  primary: '#1a365d',        // Professional navy blue
  secondary: '#2d3748',      // Dark gray
  accent: '#4a5568',         // Medium gray
  text: '#2d3748',           // Dark text
  lightText: '#718096',      // Light gray text
  background: '#ffffff',     // White background
  border: '#e2e8f0'          // Light border
}

// ATS-Optimized typography and spacing
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: colors.background,
    padding: 36,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    color: colors.text,
  },
  
  // Header Section - ATS Friendly
  header: {
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: `1pt solid ${colors.border}`,
  },
  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 6,
    textAlign: 'center',
  },
  
  title: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'medium',
  },
  
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    color: colors.lightText,
  },
  
  contactItem: {
    marginHorizontal: 6,
  },
  
  // Section Headers - ATS Standard
  section: {
    marginBottom: 16,
  },
  
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  // Professional Summary - ATS Optimized
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: colors.text,
    textAlign: 'justify',
    marginBottom: 12,
  },
  
  // Core Competencies - Keyword Rich
  competenciesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  
  competencyItem: {
    fontSize: 9,
    color: colors.text,
    backgroundColor: colors.background,
    padding: 3,
    marginRight: 8,
    marginBottom: 4,
  },
  
  // Experience Section - ATS Friendly
  jobContainer: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: `0.5pt solid ${colors.border}`,
  },
  
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 1,
  },
  
  company: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: 'medium',
    marginBottom: 1,
  },
  
  location: {
    fontSize: 9,
    color: colors.lightText,
  },
  
  dateRange: {
    fontSize: 9,
    color: colors.lightText,
    textAlign: 'right',
    fontWeight: 'medium',
  },
  
  achievements: {
    marginTop: 6,
  },
  
  achievement: {
    fontSize: 9,
    color: colors.text,
    marginBottom: 3,
    paddingLeft: 8,
    lineHeight: 1.4,
  },
  
  // Skills Section - ATS Keyword Optimized
  skillsContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  
  skillCategory: {
    marginBottom: 8,
  },
  
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 3,
  },
  
  skillsList: {
    fontSize: 9,
    color: colors.text,
    lineHeight: 1.3,
  },
  
  // Education Section
  educationItem: {
    marginBottom: 10,
    paddingBottom: 6,
  },
  
  degree: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 1,
  },
  
  institution: {
    fontSize: 9,
    color: colors.primary,
    marginBottom: 1,
  },
  
  graduationDate: {
    fontSize: 9,
    color: colors.lightText,
  },
  
  // Key Achievements
  bulletPoint: {
    fontSize: 9,
    color: colors.text,
    marginBottom: 2,
    paddingLeft: 6,
    lineHeight: 1.3,
  },
})

// ATS-Optimized Resume Document
const ATSResumeDocument = () => React.createElement(Document, null,
  React.createElement(Page, { size: "A4", style: styles.page },
    
    // Header Section
    React.createElement(View, { style: styles.header },
      React.createElement(Text, { style: styles.name }, "AROOSH DAYAL"),
      React.createElement(Text, { style: styles.title }, "Senior AI Product Manager | Machine Learning Product Leader"),
      React.createElement(View, { style: styles.contactInfo },
        React.createElement(Text, { style: styles.contactItem }, "dayalaroosh@gmail.com"),
        React.createElement(Text, { style: styles.contactItem }, "+91-9550132970"),
        React.createElement(Text, { style: styles.contactItem }, "linkedin.com/in/aroosh-dayal"),
        React.createElement(Text, { style: styles.contactItem }, "Hyderabad, India")
      )
    ),

    // Professional Summary - Keyword Rich
    React.createElement(View, { style: styles.section },
      React.createElement(Text, { style: styles.sectionTitle }, "PROFESSIONAL SUMMARY"),
      React.createElement(Text, { style: styles.summary },
        "Senior AI Product Manager with 9+ years of experience leading machine learning product development, artificial intelligence strategy, and cross-functional product teams. Proven expertise in AI product lifecycle management, deep learning applications, natural language processing, computer vision, and MLOps. Successfully launched 15+ AI-powered products serving 300+ enterprise customers with $50M+ revenue impact. Expert in product strategy, stakeholder management, agile methodologies, data-driven decision making, and AI ethics implementation."
      )
    ),

    // Core Competencies - ATS Keyword Optimized
    React.createElement(View, { style: styles.section },
      React.createElement(Text, { style: styles.sectionTitle }, "CORE COMPETENCIES"),
      React.createElement(View, { style: styles.competenciesGrid },
        React.createElement(Text, { style: styles.competencyItem }, "AI Product Management"),
        React.createElement(Text, { style: styles.competencyItem }, "Machine Learning"),
        React.createElement(Text, { style: styles.competencyItem }, "Deep Learning"),
        React.createElement(Text, { style: styles.competencyItem }, "Natural Language Processing"),
        React.createElement(Text, { style: styles.competencyItem }, "Computer Vision"),
        React.createElement(Text, { style: styles.competencyItem }, "MLOps"),
        React.createElement(Text, { style: styles.competencyItem }, "LLM Fine-tuning"),
        React.createElement(Text, { style: styles.competencyItem }, "Prompt Engineering"),
        React.createElement(Text, { style: styles.competencyItem }, "AI Ethics"),
        React.createElement(Text, { style: styles.competencyItem }, "Product Strategy"),
        React.createElement(Text, { style: styles.competencyItem }, "Roadmap Planning"),
        React.createElement(Text, { style: styles.competencyItem }, "Agile Methodologies"),
        React.createElement(Text, { style: styles.competencyItem }, "Scrum"),
        React.createElement(Text, { style: styles.competencyItem }, "Kanban"),
        React.createElement(Text, { style: styles.competencyItem }, "Data Analytics"),
        React.createElement(Text, { style: styles.competencyItem }, "A/B Testing"),
        React.createElement(Text, { style: styles.competencyItem }, "User Research"),
        React.createElement(Text, { style: styles.competencyItem }, "Market Analysis"),
        React.createElement(Text, { style: styles.competencyItem }, "Competitive Intelligence"),
        React.createElement(Text, { style: styles.competencyItem }, "Stakeholder Management"),
        React.createElement(Text, { style: styles.competencyItem }, "Cross-functional Leadership"),
        React.createElement(Text, { style: styles.competencyItem }, "Team Management"),
        React.createElement(Text, { style: styles.competencyItem }, "Product Lifecycle Management"),
        React.createElement(Text, { style: styles.competencyItem }, "Go-to-Market Strategy"),
        React.createElement(Text, { style: styles.competencyItem }, "KPI Optimization"),
        React.createElement(Text, { style: styles.competencyItem }, "ROI Analysis"),
        React.createElement(Text, { style: styles.competencyItem }, "Customer Success"),
        React.createElement(Text, { style: styles.competencyItem }, "Revenue Growth"),
        React.createElement(Text, { style: styles.competencyItem }, "Product-Market Fit")
      )
    ),

    // Professional Experience - Achievement Focused
    React.createElement(View, { style: styles.section },
      React.createElement(Text, { style: styles.sectionTitle }, "PROFESSIONAL EXPERIENCE"),
      
      // Eightfold AI
      React.createElement(View, { style: styles.jobContainer },
        React.createElement(View, { style: styles.jobHeader },
          React.createElement(View, null,
            React.createElement(Text, { style: styles.jobTitle }, "Senior AI Product Manager"),
            React.createElement(Text, { style: styles.company }, "Eightfold AI"),
            React.createElement(Text, { style: styles.location }, "Hyderabad, India")
          ),
          React.createElement(Text, { style: styles.dateRange }, "January 2022 - Present")
        ),
        React.createElement(View, { style: styles.achievements },
          React.createElement(Text, { style: styles.achievement }, "• Led AI product strategy for talent intelligence platform serving 300+ enterprise customers, driving $50M+ annual revenue"),
          React.createElement(Text, { style: styles.achievement }, "• Managed end-to-end AI product lifecycle from conception to deployment, resulting in 40% increase in user engagement"),
          React.createElement(Text, { style: styles.achievement }, "• Implemented machine learning algorithms for talent matching, improving accuracy by 35% and reducing time-to-hire by 25%"),
          React.createElement(Text, { style: styles.achievement }, "• Collaborated with data science teams to develop NLP models for resume parsing, achieving 95% accuracy rate"),
          React.createElement(Text, { style: styles.achievement }, "• Established MLOps pipeline reducing model deployment time by 60% and improving system reliability"),
          React.createElement(Text, { style: styles.achievement }, "• Led cross-functional teams of 20+ engineers, data scientists, and designers using agile methodologies"),
          React.createElement(Text, { style: styles.achievement }, "• Conducted A/B testing and user research to optimize AI features, increasing customer satisfaction by 30%"),
          React.createElement(Text, { style: styles.achievement }, "• Developed AI ethics framework and bias detection systems ensuring responsible AI deployment")
        )
      ),

      // Zynga
      React.createElement(View, { style: styles.jobContainer },
        React.createElement(View, { style: styles.jobHeader },
          React.createElement(View, null,
            React.createElement(Text, { style: styles.jobTitle }, "AI Product Manager"),
            React.createElement(Text, { style: styles.company }, "Zynga"),
            React.createElement(Text, { style: styles.location }, "Hyderabad, India")
          ),
          React.createElement(Text, { style: styles.dateRange }, "March 2020 - December 2021")
        ),
        React.createElement(View, { style: styles.achievements },
          React.createElement(Text, { style: styles.achievement }, "• Owned AI product roadmap for mobile gaming platform with 10M+ monthly active users"),
          React.createElement(Text, { style: styles.achievement }, "• Implemented deep learning recommendation engine increasing player retention by 25% and ARPU by 30%"),
          React.createElement(Text, { style: styles.achievement }, "• Developed computer vision models for content moderation, reducing manual review by 70%"),
          React.createElement(Text, { style: styles.achievement }, "• Led predictive analytics initiatives for player behavior analysis, improving churn prediction accuracy by 40%"),
          React.createElement(Text, { style: styles.achievement }, "• Managed machine learning model lifecycle including training, validation, and production deployment"),
          React.createElement(Text, { style: styles.achievement }, "• Collaborated with game economists to implement AI-driven dynamic pricing, increasing revenue by 20%"),
          React.createElement(Text, { style: styles.achievement }, "• Established data pipeline architecture supporting real-time AI inference for 10M+ daily users")
        )
      ),

      // Airtel Digital
      React.createElement(View, { style: styles.jobContainer },
        React.createElement(View, { style: styles.jobHeader },
          React.createElement(View, null,
            React.createElement(Text, { style: styles.jobTitle }, "Product Manager - AI & Analytics"),
            React.createElement(Text, { style: styles.company }, "Airtel Digital"),
            React.createElement(Text, { style: styles.location }, "Gurgaon, India")
          ),
          React.createElement(Text, { style: styles.dateRange }, "July 2018 - February 2020")
        ),
        React.createElement(View, { style: styles.achievements },
          React.createElement(Text, { style: styles.achievement }, "• Launched AI-powered fraud detection system for digital payments serving 50M+ customers"),
          React.createElement(Text, { style: styles.achievement }, "• Developed machine learning models for credit scoring, reducing default rates by 35%"),
          React.createElement(Text, { style: styles.achievement }, "• Implemented NLP chatbot for customer service, handling 60% of inquiries autonomously"),
          React.createElement(Text, { style: styles.achievement }, "• Led data analytics initiatives improving marketing campaign ROI by 45%"),
          React.createElement(Text, { style: styles.achievement }, "• Established AI governance framework ensuring regulatory compliance and ethical AI practices"),
          React.createElement(Text, { style: styles.achievement }, "• Collaborated with fintech partners to integrate AI-driven risk assessment models")
        )
      ),

      // American Express
      React.createElement(View, { style: styles.jobContainer },
        React.createElement(View, { style: styles.jobHeader },
          React.createElement(View, null,
            React.createElement(Text, { style: styles.jobTitle }, "Senior Business Analyst - Data Science"),
            React.createElement(Text, { style: styles.company }, "American Express"),
            React.createElement(Text, { style: styles.location }, "Gurgaon, India")
          ),
          React.createElement(Text, { style: styles.dateRange }, "June 2015 - June 2018")
        ),
        React.createElement(View, { style: styles.achievements },
          React.createElement(Text, { style: styles.achievement }, "• Analyzed customer data using machine learning algorithms to identify product improvement opportunities"),
          React.createElement(Text, { style: styles.achievement }, "• Developed predictive models for customer lifetime value, improving targeting accuracy by 30%"),
          React.createElement(Text, { style: styles.achievement }, "• Led customer segmentation analysis using clustering algorithms, increasing campaign conversion by 25%"),
          React.createElement(Text, { style: styles.achievement }, "• Implemented statistical models for credit risk assessment, reducing portfolio risk by 20%"),
          React.createElement(Text, { style: styles.achievement }, "• Collaborated with data engineering teams to build scalable analytics infrastructure"),
          React.createElement(Text, { style: styles.achievement }, "• Supported AI product launches across Asia-Pacific markets with data-driven insights")
        )
      )
    ),

    // Technical Skills - ATS Keyword Heavy
    React.createElement(View, { style: styles.section },
      React.createElement(Text, { style: styles.sectionTitle }, "TECHNICAL SKILLS"),
      React.createElement(View, { style: styles.skillsContainer },
        React.createElement(View, { style: styles.skillCategory },
          React.createElement(Text, { style: styles.skillCategoryTitle }, "AI/ML Technologies"),
          React.createElement(Text, { style: styles.skillsList }, "TensorFlow, PyTorch, Keras, Scikit-learn, XGBoost, LightGBM, Hugging Face, OpenAI GPT, BERT, Transformers, Neural Networks, CNN, RNN, LSTM, GAN, Reinforcement Learning, Transfer Learning, Ensemble Methods")
        ),
        React.createElement(View, { style: styles.skillCategory },
          React.createElement(Text, { style: styles.skillCategoryTitle }, "Programming & Data"),
          React.createElement(Text, { style: styles.skillsList }, "Python, R, SQL, NoSQL, MongoDB, PostgreSQL, Apache Spark, Hadoop, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Jupyter, Git, Docker, Kubernetes")
        ),
        React.createElement(View, { style: styles.skillCategory },
          React.createElement(Text, { style: styles.skillCategoryTitle }, "Cloud & MLOps"),
          React.createElement(Text, { style: styles.skillsList }, "AWS SageMaker, Google Cloud AI, Azure ML, MLflow, Kubeflow, Apache Airflow, CI/CD, Model Versioning, A/B Testing, Feature Stores, Model Monitoring, AutoML")
        ),
        React.createElement(View, { style: styles.skillCategory },
          React.createElement(Text, { style: styles.skillCategoryTitle }, "Product Management Tools"),
          React.createElement(Text, { style: styles.skillsList }, "JIRA, Confluence, Asana, Trello, Roadmunk, Aha!, ProductPlan, Mixpanel, Amplitude, Google Analytics, Tableau, Power BI, Looker, Figma, Miro")
        ),
        React.createElement(View, { style: styles.skillCategory },
          React.createElement(Text, { style: styles.skillCategoryTitle }, "AI Specializations"),
          React.createElement(Text, { style: styles.skillsList }, "Natural Language Processing, Computer Vision, Recommendation Systems, Time Series Forecasting, Anomaly Detection, Sentiment Analysis, Image Recognition, Speech Recognition, Chatbots, Conversational AI")
        )
      )
    ),

    // Education
    React.createElement(View, { style: styles.section },
      React.createElement(Text, { style: styles.sectionTitle }, "EDUCATION"),
      React.createElement(View, { style: styles.educationItem },
        React.createElement(Text, { style: styles.degree }, "Master of Business Administration (MBA)"),
        React.createElement(Text, { style: styles.institution }, "Indian Institute of Management, Bangalore"),
        React.createElement(Text, { style: styles.graduationDate }, "2013 - 2015 | Specialization: Technology Management & AI Strategy")
      ),
      React.createElement(View, { style: styles.educationItem },
        React.createElement(Text, { style: styles.degree }, "Bachelor of Technology - Computer Science Engineering"),
        React.createElement(Text, { style: styles.institution }, "National Institute of Technology, Warangal"),
        React.createElement(Text, { style: styles.graduationDate }, "2009 - 2013 | Focus: Machine Learning & Data Structures")
      )
    ),

    // Certifications & Achievements
    React.createElement(View, { style: styles.section },
      React.createElement(Text, { style: styles.sectionTitle }, "CERTIFICATIONS & ACHIEVEMENTS"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Certified AI Product Manager (AIPM) - Product School (2023)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• AWS Certified Machine Learning - Specialty (2022)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Google Cloud Professional ML Engineer (2022)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Certified Scrum Product Owner (CSPO) - Scrum Alliance (2021)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Deep Learning Specialization - Coursera/Stanford (2020)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Product Manager of the Year - Eightfold AI (2023)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Innovation Excellence Award - Zynga (2021)"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Published 5+ research papers on AI product management in IEEE conferences"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Speaker at 10+ AI/ML conferences including AI Summit, MLOps World, ProductCon"),
      React.createElement(Text, { style: styles.bulletPoint }, "• Mentor for 50+ AI product managers through Product School and ADPList")
    )
  )
)

export async function GET() {
  try {
    // Generate ATS-optimized PDF buffer
    const pdfBuffer = await renderToBuffer(React.createElement(ATSResumeDocument))
    
    // Return PDF with proper headers
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Aroosh_Dayal_ATS_Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error generating ATS-optimized PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate ATS-optimized resume PDF' },
      { status: 500 }
    )
  }
}

export async function POST() {
  return GET()
} 