"""Builds the Marketing Manager resume served at /Clive_Llora_Resume_Marketing.pdf.

Keep the facts in sync with src/data/mmPortfolioData.ts.
Run from the project root:  python generate_mm_resume_pdf.py
"""

import os

from PIL import Image, ImageDraw
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    Image as RLImage,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = os.path.join("public", "Clive_Llora_Resume_Marketing.pdf")
PHOTO_SRC = os.path.join("public", "clive-llora-headshot.png")
PHOTO_ROUND = os.path.join("public", "clive-llora-headshot-round.png")

INK = colors.HexColor("#0f172a")
BODY = colors.HexColor("#334155")
MUTED = colors.HexColor("#64748b")
ACCENT = colors.HexColor("#0e7490")
ACCENT_2 = colors.HexColor("#059669")
RULE = colors.HexColor("#cbd5e1")
PANEL = colors.HexColor("#f1f5f9")

PORTFOLIO = "https://www.clivellora.com/mmportfolio"


def round_photo():
    """Crop the headshot to a circle so it sits cleanly in the header."""
    img = Image.open(PHOTO_SRC).convert("RGBA")
    side = min(img.size)
    left = (img.width - side) // 2
    img = img.crop((left, 0, left + side, side)).resize((600, 600), Image.LANCZOS)
    mask = Image.new("L", (600, 600), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, 599, 599), fill=255)
    img.putalpha(mask)
    img.save(PHOTO_ROUND)
    return PHOTO_ROUND


def styles():
    s = {}
    s["name"] = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24, leading=27, textColor=INK)
    s["title"] = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=ACCENT)
    s["subtitle"] = ParagraphStyle("subtitle", fontName="Helvetica", fontSize=9.5, leading=12, textColor=ACCENT_2)
    s["contact"] = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=12, textColor=BODY)
    s["h"] = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=ACCENT, spaceBefore=9, spaceAfter=3)
    s["body"] = ParagraphStyle("body", fontName="Helvetica", fontSize=9, leading=12.5, textColor=BODY)
    s["role"] = ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=INK)
    s["company"] = ParagraphStyle("company", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=ACCENT)
    s["date"] = ParagraphStyle("date", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED, alignment=2)
    s["bullet"] = ParagraphStyle("bullet", parent=s["body"], leftIndent=10, bulletIndent=0, spaceAfter=1.5)
    s["stat_v"] = ParagraphStyle("stat_v", fontName="Helvetica-Bold", fontSize=14, leading=16, textColor=INK, alignment=1)
    s["stat_l"] = ParagraphStyle("stat_l", fontName="Helvetica", fontSize=7.5, leading=9.5, textColor=MUTED, alignment=1)
    s["work_t"] = ParagraphStyle("work_t", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=INK)
    s["small"] = ParagraphStyle("small", fontName="Helvetica", fontSize=8.5, leading=11.5, textColor=BODY)
    return s


def section(title, s):
    return [
        Paragraph(title.upper(), s["h"]),
        HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=0, spaceAfter=5),
    ]


def job(role, company, dates, bullets, s):
    head = Table(
        [[Paragraph(role, s["role"]), Paragraph(dates, s["date"])], [Paragraph(company, s["company"]), ""]],
        colWidths=["75%", "25%"],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ]),
    )
    items = [head, Spacer(1, 2)]
    items += [Paragraph(b, s["bullet"], bulletText="•") for b in bullets]
    items.append(Spacer(1, 6))
    return KeepTogether(items)


def build():
    s = styles()
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="Clive Llora — Marketing Manager Resume",
        author="Clive Llora",
    )
    story = []

    # Header: photo + name block
    photo = RLImage(round_photo(), width=30 * mm, height=30 * mm)
    contact = (
        "+63 995 530 0226 (Viber · WhatsApp · Telegram) &nbsp;|&nbsp; clivellora05@gmail.com<br/>"
        "Bataan, Philippines · Remote · Available on AEST business hours<br/>"
        f'Portfolio: <link href="{PORTFOLIO}" color="#0e7490"><u>clivellora.com/mmportfolio</u></link>'
        " &nbsp;|&nbsp; @clivethedigipreneur"
    )
    name_block = [
        Paragraph("Clive Llora", s["name"]),
        Spacer(1, 2),
        Paragraph("Marketing Manager", s["title"]),
        Paragraph("Direct-Response Creative · Cold Funnels &amp; Webinars", s["subtitle"]),
        Spacer(1, 5),
        Paragraph(contact, s["contact"]),
    ]
    story.append(Table(
        [[photo, name_block]],
        colWidths=[36 * mm, None],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ]),
    ))
    story.append(Spacer(1, 8))

    # Summary
    story += section("Profile", s)
    story.append(Paragraph(
        "Direct-response marketer who owns the idea, the hook and the copy, then briefs the team that ships it. "
        "Since 2019 I've written and run cold paid-social funnels for founder-led and personality-brand offers: "
        "VSL funnels, opt-in and registration pages, live webinars, and sales pages for courses, communities and products. "
        "I take what the numbers say, turn it into angles and hooks, write the scripts and copy myself, and direct editors "
        "and AI production through to a finished ad. Before marketing I spent six years as a software engineer at TELUS and "
        "Accenture, which is where my habit of making decisions from data and shipping on schedule comes from.",
        s["body"],
    ))
    story.append(Spacer(1, 8))

    # Key numbers
    stats = [
        ("US$700K", "Sales reached at Radiantz Skin after the offer rebuild"),
        ("US$1M+", "Ad spend managed over the years"),
        ("20+", "Creative, marketing & sales team members led"),
        ("2019", "Running cold paid-social funnels since"),
    ]
    story.append(Table(
        [[Paragraph(v, s["stat_v"]) for v, _ in stats], [Paragraph(l, s["stat_l"]) for _, l in stats]],
        colWidths=["25%"] * 4,
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), PANEL),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, 0), 7),
            ("BOTTOMPADDING", (0, -1), (-1, -1), 7),
            ("LINEAFTER", (0, 0), (-2, -1), 0.6, colors.white),
        ]),
    ))

    # Experience
    story += section("Experience", s)
    story.append(job(
        "Digital Marketing Specialist / Funnel Strategist", "Learn247 Consulting", "2019 – Present",
        [
            "Build cold funnels end to end for digital courses, online communities and live webinars: ad, opt-in or "
            "registration page, and autoresponder follow-up, optimized for ROAS.",
            "Write the ad copy, opt-in pages and video ad scripts, and brief the team that produces the creative.",
            "Concept, script and direct hook-driven video ads (AI spokesperson, AI UGC, testimonial, walkthrough and "
            "proof formats), testing multiple angles per offer.",
            "Lead creative, marketing and sales teams: a remote team of 20+ across creative production, campaigns, "
            "business development and project management.",
            "Managed over US$1M in ad spend over the years.",
        ],
        s,
    ))
    story.append(job(
        "Marketing Strategist", "Radiantz Skin Manufacturing Incorporated", "Project-based",
        [
            "Created and revised the offer strategy for a GMP &amp; ISO-certified health and beauty manufacturer's "
            "private-label program.",
            "Helped grow sales to US$700K through a sharper offer, positioning and conversion path.",
        ],
        s,
    ))
    story.append(job(
        "Systems Architect", "Curzzo", "2023 – Present",
        [
            "Architected Curzzo, a marketplace where creators launch and sell paid communities and courses from day one; "
            "it now lists 37 communities, the top ones with 1.2k–1.7k members.",
            "Built offer and landing pages for personality-brand communities on the platform, including AI Creator "
            "Simplified (1,721 members).",
        ],
        s,
    ))
    story.append(job(
        "Senior Software Engineer", "TELUS / Accenture", "2012 – 2018",
        [
            "Led development teams building scalable applications using SQL, Python and Java.",
            "Reduced system downtime by 30% through troubleshooting and system optimization.",
            "Collaborated with cross-functional teams to design and implement user-centric features.",
        ],
        s,
    ))

    # Selected work
    work = [
        ("Curzzo", "Community marketplace", "curzzo.com/communities"),
        ("AI Creator Simplified", "Personality-brand offer page", "curzzo.com/communities/ai-creators-simplified/landing"),
        ("AICARE Pure Organic Barley", "Product sales page, cold traffic", "store.aiconnectbiz.com/barley"),
        ("AiConnect", "VSL funnel (Taglish)", "aiconnectbiz.com"),
        ("Radiantz", "Offer strategy, B2B lead gen", "radiantzmanufacturing.com"),
        ("The Faceless Marketer", "Course sales page", "the-faceless-marketer.vercel.app"),
        ("Deyliherbs", "Direct-response sales page", "deyliherbs.com"),
        ("Learn247 Academy", "Courses, community &amp; webinars", "learn247.academy"),
    ]
    rows = [[
        Paragraph(t, s["work_t"]),
        Paragraph(k, s["small"]),
        Paragraph(f'<link href="https://{u}" color="#0e7490">{u}</link>', s["small"]),
    ] for t, k, u in work]
    block = section("Selected funnels (live)", s)
    block.append(Table(
        rows,
        colWidths=["27%", "28%", "45%"],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
        ]),
    ))
    block.append(Spacer(1, 4))
    block.append(Paragraph(
        f'Video ad creatives I concepted, scripted and directed: <link href="{PORTFOLIO}#creatives" color="#0e7490">'
        "<u>clivellora.com/mmportfolio#creatives</u></link>",
        s["small"],
    ))
    story.append(KeepTogether(block))

    # Skills
    skills = (
        "Direct-response copywriting · Video ad scripting · Hook &amp; angle development · Creative briefing · "
        "Webinar, VSL &amp; book-a-call funnels · Meta Ads · YouTube Ads · Landing pages &amp; CRO · Offer strategy · "
        "Email autoresponders · SQL &amp; data analysis · Team leadership"
    )
    ai = (
        "Claude, ChatGPT, Gemini for research, angle mining and drafts · Higgsfield &amp; AI video for AI UGC, "
        "avatars and concept tests · AI image generation for static concepts"
    )
    story.append(KeepTogether(
        section("Skills", s) + [Paragraph(skills, s["body"]), Spacer(1, 4),
                                Paragraph("<b>AI tools:</b> " + ai, s["body"])]
    ))

    story.append(KeepTogether(
        section("Education", s) + [Paragraph(
            "<b>BS in Management Information System</b> &nbsp;·&nbsp; Graduated 2008", s["body"])]
    ))

    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
