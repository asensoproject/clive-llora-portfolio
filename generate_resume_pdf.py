import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

def build_pdf():
    output_path = os.path.join("public", "Clive_Llora_Resume.pdf")
    os.makedirs("public", exist_ok=True)

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom Color Palette
    primary_color = colors.HexColor("#0f172a") # Slate 900
    accent_color = colors.HexColor("#0284c7")  # Cyan 600
    text_color = colors.HexColor("#334155")    # Slate 700
    dark_text = colors.HexColor("#0f172a")     # Slate 900
    light_bg = colors.HexColor("#f8fafc")      # Slate 50

    # Custom Styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=primary_color
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=accent_color
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=text_color,
        alignment=0
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=primary_color,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=dark_text
    )

    bold_body = ParagraphStyle(
        'BoldBody',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=14,
        textColor=primary_color
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=primary_color
    )

    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=accent_color
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#64748b"),
        alignment=2
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=dark_text,
        leftIndent=12,
        firstLineIndent=-8
    )

    story = []

    # 1. Header
    story.append(Paragraph("CLIVE LLORA", name_style))
    story.append(Paragraph("Systems Architect &amp; Vibe Coder", title_style))
    story.append(Spacer(1, 4))
    
    contact_text = "Bataan, Philippines &bull; +63 995 530 0226 &bull; hello@clivellora.com &bull; www.clivellora.com"
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.5, color=accent_color, spaceBefore=2, spaceAfter=10))

    # 2. Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=1, spaceAfter=6))
    summary_p = (
        "Systems Architect and Vibe Coder specializing in rapid, AI-assisted application development and deployment. "
        "Bridging advanced AI tools (Claude API, LLMs) with robust engineering (React, PostgreSQL, AWS) to architect scalable, "
        "high-performance web ecosystems. Proven track record of leveraging system automation to streamline CI/CD pipelines, "
        "integrating complex APIs, and translating business requirements into elegant technical solutions at light speed."
    )
    story.append(Paragraph(summary_p, body_style))
    story.append(Spacer(1, 10))

    # 3. Core Technical Skills
    story.append(Paragraph("CORE TECHNICAL SKILLS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=1, spaceAfter=6))
    
    skills_data = [
        [Paragraph("<b>AI &amp; Vibe Coding:</b>", body_style), Paragraph("Prompt Engineering, Claude API, Large Language Models (LLMs), AI Automation Workflows, Rapid Prototyping.", body_style)],
        [Paragraph("<b>Systems &amp; Cloud:</b>", body_style), Paragraph("AWS, Google Cloud Platform (GCP), System Architecture, CI/CD Pipelines, Serverless Edge.", body_style)],
        [Paragraph("<b>Full-Stack Engine:</b>", body_style), Paragraph("Next.js, React.js, Tailwind CSS, Supabase (PostgreSQL), Vercel, GitHub, SQL.", body_style)],
    ]
    t_skills = Table(skills_data, colWidths=[130, 410])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 10))

    # 4. Shipped Projects
    story.append(Paragraph("SHIPPED CORE ECOSYSTEMS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=1, spaceAfter=6))

    proj1 = "<b>Curzzo.com | Lead Architect:</b> Engineered a scalable digital community and recurring subscription ecosystem using Next.js, AWS, and Google Cloud. Utilized Claude for rapid iteration and code generation to drastically accelerate development."
    proj2 = "<b>Sendnxt.com | Full-Stack Developer:</b> Developed an automated digital marketing asset generator and workflow platform, integrating robust external APIs, Facebook OAuth, AI chatbots, broadcasts, and automated sequences."
    proj3 = "<b>Alphabusinessgroup.net | Web Developer:</b> Rapidly deployed a high-conversion business platform using AI-assisted frontend development and Vercel for seamless global edge delivery."

    story.append(Paragraph(f"&bull; {proj1}", bullet_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph(f"&bull; {proj2}", bullet_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph(f"&bull; {proj3}", bullet_style))
    story.append(Spacer(1, 10))

    # 5. Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=1, spaceAfter=6))

    experiences = [
        {
            "role": "System Architect",
            "company": "Curzzo Holdings LLC",
            "date": "Jan 2023 – Present",
            "bullets": [
                "Architected and deployed the entire digital ecosystem for Curzzo.com, a scalable community and recurring subscription platform, utilizing a modern AI-assisted development stack (Claude, Google Cloud, AWS, React/Next.js).",
                "Accelerated the development lifecycle by engineering a rapid CI/CD pipeline via GitHub, significantly reducing deployment times for iterative features.",
                "Designed a secure, high-availability database schema and authentication system using Supabase (PostgreSQL) to handle real-time data synchronization.",
                "Integrated external revenue APIs, bridging technical architecture with core business operations and subscription management."
            ]
        },
        {
            "role": "Facebook Ads Specialist / Funnel Strategist",
            "company": "Namizentials",
            "date": "Nov 2019 – Jan 2023",
            "bullets": [
                "Architected and optimized full digital marketing funnels (ads, landing pages, autoresponders) to maximize Return on Ad Spend (ROAS).",
                "Managed a high-performing marketing budget exceeding $1,000,000 while leading a remote team of 5+ employees focused on growth engineering.",
                "Implemented automated lead generation and conversion systems using advanced data-driven strategies to drive measurable business scaling."
            ]
        },
        {
            "role": "Senior Oracle Database Administrator",
            "company": "TELUS International",
            "date": "Dec 2012 – Dec 2018",
            "bullets": [
                "Optimized large-scale enterprise database systems, reducing system downtime by 30% through efficient troubleshooting and architectural refinement.",
                "Collaborated with cross-functional technical teams to design, secure, and implement user-centric data features and system integrations."
            ]
        },
        {
            "role": "Oracle Database Administrator",
            "company": "Accenture",
            "date": "Jul 2012 – Sep 2014",
            "bullets": [
                "Managed and maintained complex enterprise database environments utilizing SQL, ensuring high availability, peak system optimization, and robust data integrity."
            ]
        }
    ]

    for exp in experiences:
        t_header = Table([
            [Paragraph(f"{exp['role']} &bull; <font color='#0284c7'>{exp['company']}</font>", job_title_style), Paragraph(exp['date'], date_style)]
        ], colWidths=[380, 160])
        t_header.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 2),
        ]))
        story.append(t_header)
        for bullet in exp['bullets']:
            story.append(Paragraph(f"&bull; {bullet}", bullet_style))
            story.append(Spacer(1, 2))
        story.append(Spacer(1, 4))

    # 6. Education
    story.append(Spacer(1, 4))
    story.append(Paragraph("EDUCATION", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("<b>BS in Management Information Systems (MIS)</b> &bull; Graduated 2008", body_style))

    doc.build(story)
    print(f"Successfully generated PDF at {output_path}")

if __name__ == "__main__":
    build_pdf()
