// Content for the Marketing Manager portfolio at /mmportfolio, written for a
// direct-response "Marketing Manager (Cold Funnels & Webinars)" role.
// Facts come from "Resume 2026 - DMS.pdf", Clive's own notes, and his live funnels.
// Only add numbers Clive has confirmed.

export const MM_PORTFOLIO_DATA = {
  name: "Clive Llora",
  title: "Marketing Manager",
  subtitle: "Direct-Response Creative · Cold Funnels & Webinars",
  tagline: "I own the idea, the hook and the copy. Then I brief the team that ships it.",
  pitch:
    "Since 2019 I've written and run cold paid-social funnels for founder-led offers: webinar and live-workshop registrations, VSL funnels, opt-in pages and sales pages for courses, communities and products. I take what the numbers say, turn it into angles and hooks, write the scripts and copy myself, and brief editors so the ad ships on time.",
  status: "Open to: Marketing Manager (Cold Funnels & Webinars)",
  email: "clivellora05@gmail.com",
  phone: "+63 995 530 0226",
  phoneNote: "Viber · WhatsApp · Telegram",
  location: "Bataan, Philippines · Remote, available on AEST hours",
  socialHandle: "@clivethedigipreneur",
  resumePdfUrl: "/Clive_Llora_Resume_Marketing.pdf",
  // Optional: paste a Loom intro URL here and an intro button appears in the hero and contact sections.
  loomUrl: "",
  badges: ["Meta Ads · YouTube", "Webinar & VSL Funnels", "Copywriter First", "AI-Native Workflow"],

  stats: [
    { value: "US$700K", label: "Sales reached at Radiantz Skin after I rebuilt the offer" },
    { value: "2019", label: "Writing & running cold paid-social funnels since" },
    { value: "US$1M+", label: "Ad spend managed over the years" },
    { value: "20+", label: "Creative, marketing & sales team members led" },
  ],

  // Mirrors the role's key responsibilities.
  fit: [
    {
      icon: "Lightbulb",
      title: "Creative strategy for paid ads",
      body: "Concepts, angles and hooks for Meta and YouTube, built on a real understanding of the offer, who it's for and why they'd buy now.",
    },
    {
      icon: "PenLine",
      title: "I write the copy, every week",
      body: "Ad copy, video ad scripts, static ad concepts, opt-in pages, registration pages and sales pages. The words are mine; I don't hand them off.",
    },
    {
      icon: "Clapperboard",
      title: "Hook-driven promo video scripts",
      body: "Short direct-response videos that sell a webinar, a live event or the current offer: hook in the first 3 seconds, one clear promise, one clear CTA.",
    },
    {
      icon: "ClipboardList",
      title: "Briefs editors can execute",
      body: "Every concept goes out as a shot-by-shot brief with hook, on-screen text, b-roll and CTA, and I run the feedback loop until the ad ships.",
    },
    {
      icon: "ChartLine",
      title: "Creative from the data",
      body: "I work with the media buyer on what's winning and why (hook rate, thumbstop, CTR, cost per registration) and feed that straight into the next batch.",
    },
    {
      icon: "ShieldCheck",
      title: "Compliant by default",
      body: "Copy written inside Meta and YouTube policy and the constraints of education and finance offers: no income guarantees, claims backed by proof.",
    },
  ],

  experience: [
    {
      role: "Digital Marketing Specialist / Funnel Strategist",
      company: "Learn247 Consulting",
      duration: "2019 – Present",
      current: true,
      highlights: [
        "Build cold funnels end to end for digital courses, online communities and live webinars: ad, opt-in or registration page, and autoresponder follow-up, optimized for ROAS.",
        "Write the ad copy, opt-in pages and video ad scripts, and brief the team that produces the creative.",
        "Lead creative, marketing and sales teams: a remote team of 20+ across creative production, campaigns, business development and project management.",
        "Managed over US$1M in ad spend over the years.",
      ],
    },
    {
      role: "Marketing Strategist",
      company: "Radiantz Skin Manufacturing Incorporated",
      duration: "Project",
      current: false,
      highlights: [
        "Created and revised the offer strategy for a GMP & ISO-certified health and beauty manufacturer's private-label program.",
        "Helped grow sales to US$700K through a sharper offer, positioning and conversion path.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "TELUS / Accenture",
      duration: "2012 – 2018",
      current: false,
      highlights: [
        "Led development teams building scalable applications; SQL, Python and Java.",
        "Reduced system downtime by 30% through troubleshooting and system optimization.",
        "This is where my habit of making decisions from data and shipping on schedule comes from.",
      ],
    },
  ],

  education: { degree: "BS in Management Information System", year: "Graduated 2008" },

  // Live funnels, newest first. Screenshots live in /public/projects.
  work: [
    {
      title: "Curzzo",
      kind: "Community marketplace · Platform growth",
      body: "Marketplace where creators launch and sell paid communities and courses from day one, without building a website or funnel. It now lists 37 communities, the top ones with 1.2k–1.7k paying members, plus a built-in referral program for word-of-mouth growth.",
      role: "Systems Architect: platform, funnels & go-to-market",
      link: "https://curzzo.com/communities",
      image: "/projects/curzzo/CURZZO-HOME.jpg",
    },
    {
      title: "AI Creator Simplified",
      kind: "Personality-brand offer page",
      body: "Landing page for JayFlix AI's #1-ranked AI creator community (1,721 members at ₱2,497). It leads with an identity hook, builds the founder's authority, lists the audience's pain points, and closes with a 24-hour money-back guarantee and a price-increase trigger.",
      role: "Landing page copy & build",
      link: "https://curzzo.com/communities/ai-creators-simplified/landing",
      image: "/projects/curzzo/CURZZO-AICS.jpg",
    },
    {
      title: "AICARE Pure Organic Barley",
      kind: "Product sales page · Cold traffic",
      body: "Direct-response sales page for a celebrity-endorsed barley drink: price anchored to ₱10 per glass, a launch-price countdown, free shipping and COD to remove friction, and copy kept inside food-product claim rules.",
      role: "Offer, copy, page build",
      link: "https://store.aiconnectbiz.com/barley",
      image: "/projects/aicare/AICARE-1.jpg",
    },
    {
      title: "AiConnect",
      kind: "VSL funnel · Taglish",
      body: "Video sales letter funnel for a zero-inventory e-commerce business opportunity, written in Taglish for Filipino first-time entrepreneurs, with a watch-to-unlock bonus to keep people watching to the end.",
      role: "Angle, VSL page copy, build",
      link: "https://aiconnectbiz.com/",
      image: "/projects/aiconnect/AICONNECT-1.jpg",
    },
    {
      title: "Radiantz Skin Manufacturing",
      kind: "Offer strategy · B2B lead gen",
      body: "Rebuilt the private-label offer into a six-step path from idea to launch with a clear starting capital, consultation CTAs and objection handling around FDA registration.",
      role: "Offer strategy, positioning, site copy",
      link: "https://radiantzmanufacturing.com/",
      image: "/projects/radiantz/RADIANTZ-1.jpg",
    },
    {
      title: "The Faceless Marketer",
      kind: "Course sales page",
      body: "Sales page for an AI UGC creatives masterclass aimed at Shopee and TikTok Shop affiliates. It's built on an old-way vs new-way contrast and a price-increase urgency trigger.",
      role: "Offer, copy, build",
      link: "https://the-faceless-marketer.vercel.app/",
      image: "/projects/facelessmarketer/FACELESS-1.jpg",
    },
    {
      title: "Deyliherbs",
      kind: "Direct-response sales page",
      body: "Sales page for a Filipino herbal tea brand using benefit-led copy, trust badges, a 45-day money-back guarantee and cash-on-delivery to reduce friction.",
      role: "Copy, offer structure, build",
      link: "https://www.deyliherbs.com",
      image: "/projects/deyliherbs/DEYLIHERBS-HOME.jpg",
    },
    {
      title: "Learn247 Academy",
      kind: "Courses, community & webinars",
      body: "Brand hub for online courses, live webinars and coaching. Cold traffic from Meta ads lands on opt-in pages and goes into email follow-up.",
      role: "Funnels, opt-in pages, ads",
      link: "https://www.learn247.academy",
      image: null as string | null,
    },
  ],

  // Video ads Clive concepted, scripted and directed. Videos play from Google Drive;
  // thumbnails are copied into /public/creatives.
  creatives: [
    { slug: "tfm-angle-2", driveId: "1aiJhdBtLCQQd9zx3Wn-PJTsj59QRvXlR", campaign: "The Faceless Marketer", format: "AI spokesperson", angle: "Angle test #2" },
    { slug: "tfm-angle-3", driveId: "1aqk_B58P_4L6w4fFuzmnf3Gx8T6H93GG", campaign: "The Faceless Marketer", format: "AI spokesperson", angle: "Angle test #3" },
    { slug: "tfm-avatar-reveal", driveId: "1ah1pc13B1_4CeKrZKfLJlAFxsjPC_aTO", campaign: "The Faceless Marketer", format: "AI avatar", angle: "Pattern interrupt: “Hindi ako totoo”" },
    { slug: "tfm-proof", driveId: "1CcS4SkiFl88WwUmYTV42mmQZ8LDTat5O", campaign: "The Faceless Marketer", format: "Proof overlay", angle: "Student proof from the community chat" },
    { slug: "tfm-confession", driveId: "1kdZLI6icdRcN5Oy0jfQNC6MUTAihavxS", campaign: "The Faceless Marketer", format: "Selfie-style", angle: "Quick confession" },
    { slug: "tfm-walkthrough", driveId: "1bqXluYGgPDJoqAYUo8vgVAav-vpCbprU", campaign: "The Faceless Marketer", format: "Walkthrough", angle: "Show-how demo" },
    { slug: "tfm-testimonial-patrick", driveId: "1O6RQ7Jnce9lXNxKoh3PQCMuvnkYoLIEX", campaign: "The Faceless Marketer", format: "Student testimonial", angle: "Social proof" },
    { slug: "tfm-upsell-raymund", driveId: "1NmDb9SNb9wCz1nLRF_wnNWQ--JH4lCfz", campaign: "TFM Blueprint", format: "Zoom testimonial", angle: "Upsell proof" },
    { slug: "ai-influencer-francesca-1", driveId: "1OLHlxXAuwUP56YDtGJ3z2v0Zq05lH4an", campaign: "AI Influencer", format: "AI UGC", angle: "Angle 1" },
    { slug: "ai-influencer-francesca-3", driveId: "1bcEDq_fAC9mI53PzaJA2eSKrDElT_Azf", campaign: "AI Influencer", format: "AI UGC", angle: "Angle 3" },
    { slug: "ai-ugc-live-selling", driveId: "1z9eSqtH_52QxTV78o-Oc8RaTSQSI_jkQ", campaign: "AI Influencer", format: "AI live-selling", angle: "Shopee Live demo" },
    { slug: "coachcircle-hook-2", driveId: "1Ke95PIWmBgDgw5XMdH3sEZNtyQgX0fUp", campaign: "CoachCircle", format: "Event footage", angle: "POV authority hook" },
  ],

  // Headlines and hooks from Clive's live pages, each labeled with the angle it uses.
  hooks: [
    { angle: "Price anchor", copy: "Naturally nutritious, easy to mix, and only ₱10 per glass.", source: "AICARE Barley" },
    { angle: "Pain point", copy: "Getting your greens shouldn't be hard or expensive.", source: "AICARE Barley" },
    { angle: "Pattern interrupt", copy: "Business owner ka ba, o glorified packer?", source: "AiConnect VSL" },
    { angle: "Identity shift", copy: "Don't just be an AI consumer. Become an AI Creator.", source: "AI Creator Simplified" },
    { angle: "Contrarian", copy: "The affiliate game is rigged (unless you have AI leverage).", source: "The Faceless Marketer" },
    { angle: "Risk reversal", copy: "Your brand. Our lab. We handle everything.", source: "Radiantz" },  ],

  process: [
    { step: "01", title: "Read the numbers", body: "Sit with the media buyer: which hooks hold, where the drop-off is, what the cost per registration is telling us." },
    { step: "02", title: "Find the angle", body: "Go back to the offer and the buyer. Write 10–20 hooks across angles: proof, pain, curiosity, contrarian, identity." },
    { step: "03", title: "Write & script", body: "30–60s promo scripts, static concepts and the landing-page copy that matches them, so the message is the same from ad to page." },
    { step: "04", title: "Brief & ship", body: "Shot-by-shot briefs for editors and the photo/video team, review rounds against the brief, and delivery on the agreed date." },
    { step: "05", title: "Learn & iterate", body: "Winners get variations, losers get a diagnosis. Win rate against control is the scoreboard." },
  ],

  aiTools: [
    { name: "Claude · ChatGPT · Gemini", use: "Research, angle mining, first drafts and script variations, always rewritten in my own voice" },
    { name: "Higgsfield & AI video", use: "AI video and UGC-style creative for concept tests before a full shoot" },
    { name: "AI image generation", use: "Static ad concepts and thumbnails, so the team sees the idea before production" },
  ],

  skills: [
    "Direct-Response Copywriting",
    "Video Ad Scripting",
    "Hook & Angle Development",
    "Webinar Funnels",
    "VSL Funnels",
    "Book-a-Call Funnels",
    "Meta Ads",
    "YouTube Ads",
    "Landing Page & CRO",
    "Offer Strategy",
    "Creative Briefing",
    "Email Autoresponders",
    "SQL & Data Analysis",
  ],

  plan: [
    {
      phase: "Week 1–2",
      title: "Learn the offer & the account",
      points: [
        "Go through the webinar, the personality brand and the buyer journey as a prospect would.",
        "Audit current and past winners with the media buyer: hooks, angles, CTR, cost per registration.",
        "Build a swipe file and angle bank, then deliver the first batch of hooks and scripts.",
      ],
    },
    {
      phase: "Week 3–6",
      title: "Ship & test on a cadence",
      points: [
        "Set a weekly creative rhythm: new concepts, scripts and briefs every week, on schedule.",
        "Standardize briefs so editors and the photo/video team can execute without back-and-forth.",
        "Line up landing-page copy tests alongside the ad tests so the message matches.",
      ],
    },
    {
      phase: "Week 7–12",
      title: "Raise the win rate",
      points: [
        "Double down on winning angles with variations; retire what's fatiguing before it costs money.",
        "Report win rate against control, hook rate and CTR trends to the team every week.",
        "Document the playbook so the creative team can grow around it.",
      ],
    },
  ],
};
