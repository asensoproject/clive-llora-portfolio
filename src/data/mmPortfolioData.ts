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
    { value: "₱1M+", label: "Ad & marketing budget managed" },
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
        "Manage a marketing budget of over a million pesos.",
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

  // Headlines and hooks from Clive's live pages, each labeled with the angle it uses.
  hooks: [
    { angle: "Pattern interrupt", copy: "Business owner ka ba, o glorified packer?", source: "AiConnect VSL" },
    { angle: "Qualifying question", copy: "Naghahanap ka ba ng negosyong pwede mong simulan kahit wala kang karanasan?", source: "AiConnect VSL" },
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
