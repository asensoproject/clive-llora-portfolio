// Content for the Marketing Manager portfolio at /mmportfolio.
// Facts here come from "Resume 2026 - DMS.pdf"; keep them in sync with that resume.

export const MM_PORTFOLIO_DATA = {
  name: "Clive Llora",
  title: "Marketing Manager",
  tagline: "Result-oriented techpreneur with a sunny point of view",
  pitch:
    "A software engineer by profession and a marketer by heart. I build and run full-funnel campaigns, from the ad to the landing page to the autoresponder, and manage them with an engineer's discipline for data, systems and measurable ROAS.",
  status: "Interviewing for Marketing Manager roles",
  email: "clivellora05@gmail.com",
  phone: "+63 995 530 0226",
  phoneNote: "Viber · WhatsApp · Telegram",
  location: "Bataan, Philippines",
  socialHandle: "@clivethedigipreneur",
  resumePdfUrl: "/Clive_Llora_Resume_Marketing.pdf",
  badges: ["BS Management Information Systems", "Ex-TELUS", "Ex-Accenture", "Author · Entrepreneur · Educator"],

  stats: [
    { value: "₱1M+", label: "Marketing budget managed" },
    { value: "5+", label: "Remote team members led" },
    { value: "2019", label: "Running funnels & paid social since" },
    { value: "30%", label: "Less system downtime (engineering)" },
  ],

  pillars: [
    {
      icon: "Filter",
      title: "Funnel Strategy",
      body: "Full funnels built end to end: ad creative, landing page and email follow-up, each stage tuned against ROAS.",
    },
    {
      icon: "Megaphone",
      title: "Social Media Advertising",
      body: "Paid social campaigns planned, launched and optimized for lead generation and sales.",
    },
    {
      icon: "Users",
      title: "Team & Budget Leadership",
      body: "Led a remote team of 5+ across project management, business development and campaigns, on a budget of over ₱1M.",
    },
    {
      icon: "Database",
      title: "Data-Driven Decisions",
      body: "SQL and database expertise means I can pull, join and question the numbers myself instead of waiting on a report.",
    },
    {
      icon: "Bot",
      title: "AI Marketing",
      body: "AI applied to creative, copy, chat automation and analysis so a small team ships like a large one.",
    },
    {
      icon: "Mail",
      title: "Email & Automation",
      body: "Autoresponders and nurture sequences that keep leads warm and move them to purchase without manual follow-up.",
    },
  ],

  experience: [
    {
      role: "Digital Marketing Specialist / Funnel Strategist",
      company: "Learn247 Consulting",
      duration: "2019 – Present",
      current: true,
      highlights: [
        "Built full funnels (ad, landing page, autoresponder) and optimized them for ROAS.",
        "Led a remote team of 5+ employees across project management, business development and marketing campaigns.",
        "Managed a marketing budget of over a million pesos.",
        "Developed expertise in digital marketing, sales funnels and lead generation, driving measurable results.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "TELUS / Accenture",
      duration: "2012 – 2018",
      current: false,
      highlights: [
        "Led development teams building scalable applications.",
        "Specialized in database management, software development and system integration using SQL, Python and Java.",
        "Reduced system downtime by 30% through efficient troubleshooting and system optimization.",
        "Collaborated with cross-functional teams to design and implement user-centric features.",
      ],
    },
  ],

  education: { degree: "BS in Management Information System", year: "Graduated 2008" },

  // Marketing assets built or launched; screenshots live in /public/projects.
  work: [
    {
      title: "Learn247 Academy",
      kind: "Lead-gen funnel & brand site",
      body: "Brand website and paid-social lead funnel for the educational consulting business I market, with the domain verified on Meta for ad campaigns.",
      link: "https://www.learn247.academy",
      image: null as string | null,
    },
    {
      title: "Sendnxt",
      kind: "Lead nurturing & broadcast automation",
      body: "One workspace to connect Facebook pages, automate chat replies, and send broadcasts and multi-step sequences to nurture leads.",
      link: "https://sendnxt.com/",
      image: "/projects/sendnxt/SENDNXT-1.jpg",
    },
    {
      title: "Curzzo",
      kind: "Community monetization platform",
      body: "Lets experts monetize a community from day one without building websites or funnels, with a built-in automated referral program for word-of-mouth growth.",
      link: "https://curzzo.com/communities",
      image: "/projects/curzzo/CURZZO-1.jpg",
    },
    {
      title: "Deyliherbs",
      kind: "E-commerce & conversion",
      body: "E-commerce storefront designed around a conversion-optimized checkout and automated customer notifications.",
      link: "https://www.deyliherbs.com",
      image: "/projects/deyliherbs/DEYLIHERBS-1.jpg",
    },
    {
      title: "Alpha Business Group",
      kind: "B2B community & partnerships",
      body: "Member network where business owners connect, offer exclusive perks and form cross-business partnerships.",
      link: "https://alphabusinessgroup.net/",
      image: "/projects/alphabusinessgroup/ABG-1.jpg",
    },
  ],

  skills: [
    "Social Media Advertising",
    "Website Design & Funnel Creation",
    "AI Marketing",
    "Email Marketing",
    "Lead Generation",
    "ROAS Optimization",
    "Database Design & Management",
    "SQL Programming",
    "Team Leadership",
    "Business & Entrepreneurial Mindset",
  ],

  plan: [
    {
      phase: "Days 1–30",
      title: "Listen & audit",
      points: [
        "Meet sales, product and leadership to learn the goals and the customer.",
        "Audit every channel, funnel and tracking setup; establish a baseline for CAC, conversion and ROAS.",
        "Find the quick wins: broken tracking, leaky landing pages, stalled follow-up.",
      ],
    },
    {
      phase: "Days 31–60",
      title: "Fix & test",
      points: [
        "Ship the quick wins and set up one reporting dashboard everyone trusts.",
        "Launch structured A/B tests on offers, creative and landing pages.",
        "Build or repair the nurture sequence so no lead goes cold.",
      ],
    },
    {
      phase: "Days 61–90",
      title: "Scale & systemize",
      points: [
        "Move budget to the channels and creatives that are proving out.",
        "Document playbooks and a weekly cadence for the team.",
        "Present a 12-month plan with targets tied to revenue.",
      ],
    },
  ],
};
