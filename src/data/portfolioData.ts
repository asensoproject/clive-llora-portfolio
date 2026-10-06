export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  features: string[];
  architectureHighlights: string[];
  gradient: string;
  badge: string;
  link?: string;
  image?: string;
  images?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; icon: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  name: "Clive Llora",
  title: "Vibe Coder & Systems Architect",
  valueProposition:
    "A Management in Information Systems graduate with software engineering background at Accenture & Telus, now architecting high-impact AI systems and scalable digital ecosystems at light speed.",
  bio: "A Management in Information Systems graduate with software engineering experience at Accenture and Telus, now channeling enterprise engineering expertise into building high-impact AI systems and scalable digital platforms.",
  degree: "Management in Information Systems",
  experience: [
    { company: "Accenture", role: "Software Engineer", badge: "Ex-Accenture" },
    { company: "Telus", role: "Software Engineer", badge: "Ex-Telus" },
  ],
  status: "Available for High-Impact Roles & Advisory",
  email: "hello@clivellora.com",
  phone: "+63 995 530 0226",
  location: "Bataan, Philippines",
  resumePdfUrl: "/Clive_Llora_Resume.pdf",
  socials: {
    github: "https://github.com/clivellora",
    linkedin: "https://linkedin.com/in/clivellora",
    twitter: "https://x.com/clivellora",
  },
  workHistory: [
    {
      role: "System Architect",
      company: "Curzzo Holdings LLC",
      duration: "Jan 2023 – Present",
      location: "Remote",
      badge: "Current Role",
      highlights: [
        "Architected and deployed the entire digital ecosystem for Curzzo.com, a scalable community and recurring subscription platform, utilizing a modern AI-assisted development stack (Claude, Google Cloud, AWS, React/Next.js).",
        "Accelerated the development lifecycle by engineering a rapid CI/CD pipeline via GitHub, significantly reducing deployment times for iterative features.",
        "Designed a secure, high-availability database schema and authentication system using Supabase (PostgreSQL) to handle real-time data synchronization.",
        "Integrated external revenue APIs, bridging technical architecture with core business operations and subscription management."
      ]
    },
    {
      role: "Facebook Ads Specialist / Funnel Strategist",
      company: "Namizentials",
      duration: "Nov 2019 – Jan 2023",
      location: "Remote",
      badge: "Growth Engineering",
      highlights: [
        "Architected and optimized full digital marketing funnels (ads, landing pages, autoresponders) to maximize Return on Ad Spend (ROAS).",
        "Managed a high-performing marketing budget exceeding $1,000,000 while leading a remote team of 5+ employees focused on growth engineering.",
        "Implemented automated lead generation and conversion systems using advanced data-driven strategies to drive measurable business scaling."
      ]
    },
    {
      role: "Senior Oracle Database Administrator",
      company: "TELUS International",
      duration: "Dec 2012 – Dec 2018",
      location: "Enterprise Infrastructure",
      badge: "Ex-TELUS",
      highlights: [
        "Optimized large-scale database systems, reducing system downtime by 30% through efficient troubleshooting and architectural refinement.",
        "Collaborated with cross-functional technical teams to design, secure, and implement user-centric data features and system integrations."
      ]
    },
    {
      role: "Oracle Database Administrator",
      company: "Accenture",
      duration: "Jul 2012 – Sep 2014",
      location: "Enterprise Systems",
      badge: "Ex-Accenture",
      highlights: [
        "Managed and maintained complex enterprise database environments utilizing SQL, ensuring high availability, peak system optimization, and robust data integrity."
      ]
    }
  ],
  stats: [
    { label: "AI Ecosystems Shipped", value: "10+" },
    { label: "Engineering Velocity", value: "10x Fast" },
    { label: "Enterprise Proven", value: "Accenture & Telus" },
    { label: "Core Stack", value: "Next.js + Claude" },
  ],
  projects: [
    {
      id: "curzzo",
      title: "Curzzo",
      subtitle: "Community Monetization Platform",
      description:
        "A community building platform where you can monetize your expertise on Day 1 without building websites and complicated funnels. Comes with an automated referral system for your community that you can set up in one go.",
      longDescription:
        "Curzzo empowers experts to build and monetize thriving communities on Day 1 without building websites or complicated sales funnels. Features an integrated automated referral system, instant member onboarding, and real-time community engagement powered by Claude API & Supabase.",
      techStack: ["Claude API", "Supabase", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      metrics: ["Day 1 Monetization", "Automated Referral System", "Zero-Website Setup"],
      features: [
        "1-Click community deployment & expert monetization engine",
        "Built-in automated referral system to scale community reach",
        "No complex website or funnel building required",
        "Supabase real-time database sync & instant notifications",
      ],
      architectureHighlights: [
        "Distributed Serverless API routes on Vercel Edge",
        "Automated commission & referral tracking telemetry",
        "Edge-rendered responsive client interface with zero latency feel",
      ],
      gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
      badge: "Community Platform",
      link: "https://curzzo.com/communities",
      image: "/projects/curzzo/CURZZO-1.jpg",
      images: [
        "/projects/curzzo/CURZZO-1.jpg",
        "/projects/curzzo/CURZZO-2.jpg",
        "/projects/curzzo/CURZZO-3.jpg",
      ],
    },
    {
      id: "sendnxt",
      title: "Sendnxt",
      subtitle: "Omnichannel Lead Nurturing & Automation",
      description:
        "Connect your Facebook pages, automated chats, send broadcasts & sequences, and nurture leads all in one place.",
      longDescription:
        "Sendnxt streamlines social lead nurturing and campaign management into a unified workspace. Connect your Facebook pages, deploy intelligent automated chat flows, launch multi-touch broadcasts & sequence campaigns, and nurture prospects seamlessly.",
      techStack: ["Next.js", "Claude API", "Tailwind CSS", "Vercel Edge", "SQL", "Framer Motion"],
      metrics: ["All-in-One Workspace", "Automated Facebook Chat", "Broadcast Sequences"],
      features: [
        "Seamless Facebook Pages integration & unified inbox",
        "Automated AI chat responses & multi-step campaign sequences",
        "One-click mass broadcast dispatcher for instant lead outreach",
        "Centralized lead nurturing pipeline with status tracking",
      ],
      architectureHighlights: [
        "Asynchronous message task queues powered by background workers",
        "Webhook listeners for instant real-time Facebook Messenger events",
        "High-performance dashboard with dark mode UI components",
      ],
      gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
      badge: "Automation Engine",
      link: "https://sendnxt.com/",
      image: "/projects/sendnxt/SENDNXT-1.jpg",
      images: [
        "/projects/sendnxt/SENDNXT-1.jpg",
        "/projects/sendnxt/SENDNXT-2.jpg",
      ],
    },
    {
      id: "alphabusinessgroup",
      title: "Alpha Business Group",
      subtitle: "Exclusive Business Brotherhood Network",
      description:
        "A system for business professionals to connect, create exclusive perks for the brotherhood, and get connected with other businesses as well.",
      longDescription:
        "Alpha Business Group is a premier platform engineered for business leaders and professionals. It enables members to connect, unlock exclusive brotherhood perks, create cross-business partnerships, and expand enterprise networks.",
      techStack: ["Next.js", "System Architecture", "SQL", "Vercel", "Tailwind CSS", "GitHub CI/CD"],
      metrics: ["B2B Brotherhood Network", "Exclusive Member Perks", "Cross-Business Sync"],
      features: [
        "Verified business professional networking & connection hub",
        "Exclusive brotherhood perk creation & marketplace",
        "Cross-business partnership matchmaker & intro system",
        "High-conversion enterprise user portal & directory",
      ],
      architectureHighlights: [
        "Atomic component architecture with custom design tokens",
        "Custom server-side analytics with privacy-first tracking",
        "Automated deployment pipelines via GitHub Actions & Vercel",
      ],
      gradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
      badge: "Enterprise Platform",
      link: "https://alphabusinessgroup.net/",
      image: "/projects/alphabusinessgroup/ABG-1.jpg",
      images: [
        "/projects/alphabusinessgroup/ABG-1.jpg",
        "/projects/alphabusinessgroup/ABG-2.jpg",
        "/projects/alphabusinessgroup/ABG-3.jpg",
        "/projects/alphabusinessgroup/ABG-4.jpg",
      ],
    },
    {
      id: "deyliherbs",
      title: "Deyliherbs",
      subtitle: "High-Functioning E-Commerce Platform",
      description:
        "A high-functioning e-commerce platform built for scale, seamless checkout experience, automated order workflows, and conversion optimization.",
      longDescription:
        "Deyliherbs is a high-performance e-commerce platform engineered for scale, featuring high-speed product catalog rendering, secure checkout integration, automated inventory tracking, and seamless customer order management.",
      techStack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "SQL", "E-Commerce Architecture"],
      metrics: ["High Conversion Rate", "Sub-Second Load", "Automated Checkout"],
      features: [
        "High-speed product catalog with category filtering",
        "Conversion-optimized checkout flow and order pipeline",
        "Automated inventory management & customer notification engine",
        "Responsive dark-mode aesthetic with fluid micro-interactions",
      ],
      architectureHighlights: [
        "Server-side rendered catalog for maximum SEO performance",
        "Secure database schema for order processing and inventory sync",
        "Edge-cached asset delivery for lightning-fast mobile shopping",
      ],
      gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
      badge: "E-Commerce Platform",
      link: "https://www.deyliherbs.com",
    },
  ] as Project[],
  skillCategories: [
    {
      title: "AI & Intelligence Core",
      skills: [
        { name: "Claude API", level: "Expert", icon: "Bot", highlight: true },
        { name: "Gemini AI", level: "Expert", icon: "Sparkles", highlight: true },
        { name: "OpenAI", level: "Expert", icon: "Bot", highlight: true },
        { name: "LLM Integration", level: "Expert", icon: "Zap", highlight: true },
        { name: "Prompt Engineering", level: "Advanced", icon: "Sparkles" },
        { name: "Context & Vector Storage", level: "Advanced", icon: "Brain" },
      ],
    },
    {
      title: "Frontend & Ecosystem",
      skills: [
        { name: "Next.js (App Router)", level: "Expert", icon: "Globe", highlight: true },
        { name: "React", level: "Expert", icon: "Code" },
        { name: "Tailwind CSS", level: "Expert", icon: "Layers" },
        { name: "Framer Motion", level: "Advanced", icon: "Film" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Supabase", level: "Expert", icon: "Database", highlight: true },
        { name: "SQL & PostgreSQL", level: "Expert", icon: "Server" },
        { name: "System Architecture", level: "Expert", icon: "Cpu", highlight: true },
        { name: "REST & WebSockets", level: "Advanced", icon: "Radio" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: "Expert", icon: "Cloud", highlight: true },
        { name: "Google Cloud", level: "Expert", icon: "Cloud", highlight: true },
        { name: "Vercel Edge Platform", level: "Expert", icon: "Cloud", highlight: true },
        { name: "GitHub & Actions", level: "Expert", icon: "GitBranch" },
      ],
    },
  ] as SkillCategory[],
  architectureSteps: [
    {
      step: "01",
      title: "AI Prototyping & Vibe Coding",
      description:
        "Leveraging generative AI models (Claude 3.5) to prototype complex business logic and UI components in minutes rather than weeks.",
      tag: "Rapid Execution",
    },
    {
      step: "02",
      title: "Scalable System Architecture",
      description:
        "Designing robust relational databases in Supabase, enforcing RLS security, and structuring serverless edge functions for bulletproof scalability.",
      tag: "Production Grade",
    },
    {
      step: "03",
      title: "Continuous Edge Deployment",
      description:
        "Automating deployment pipelines through GitHub & Vercel to ship instantaneous updates with zero downtime and sub-second global response.",
      tag: "Zero Downtime",
    },
  ],
};
