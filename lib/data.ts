export const profile = {
  name: "Aryan Sikka",
  role: "Software Engineer II",
  location: "Noida, India",
  email: "sikkaaryan8816@gmail.com",
  phone: "+91 99717 36858",
  github: "https://github.com/sikkaaryan",
  linkedin: "https://www.linkedin.com/in/sikkaaryan6529",
  resumeUrl: "/Aryan-Sikka-Resume.pdf?v=2026-06b",
  tagline:
    "Software engineer working across .NET applications and cross-platform mobile games. I like building features end-to-end, solving difficult bugs, and making tools that save repeat work.",
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  blurb?: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    company: "Aristocrat Technologies",
    role: "Software Engineer II",
    period: "Oct 2024 — Present",
    location: "Noida, India",
    current: true,
    bullets: [
      "Develop production mobile game modules for NFL SB Slots (Android + iOS) using C#, TypeScript, Unity-based architecture, backend API integration, and configuration-driven logic.",
      "Own core product features end-to-end: game logic, reel/spin mechanics, bonus rounds, UI flows, sound integration, backend data flow, analytics/events, and bug fixes.",
      "Contributed to several production game modules, including Buffalo Link, with work across gameplay features and game-state behavior.",
      "Built a reusable game template framework (base structure, reel engine, configurable paylines, symbol config, common setup components) that cut new-game development time by ~30%.",
      "Building internal AI workflows and agent pipelines to automate game code generation — reducing boilerplate work across new modules and accelerating delivery for the team.",
      "Using AI agents to automate RTP (Return-to-Player) verification and fix common math/logic defects — catching regressions earlier and improving release reliability.",
      "Debugged complex production and QA issues — RTP/math mismatches, game freezes, spin-result mismatches, logic defects, device-specific bugs — improving release quality across modules.",
      "Collaborated with backend, QA, design, art, and product using GitLab, Jira, and GitLab CI/CD; received strong performance rating and manager appreciation for ownership and delivery.",
    ],
    stack: [
      "C#",
      "TypeScript",
      "Unity",
      "Android",
      "iOS",
      "AI Agents / Workflows",
      "GitLab CI/CD",
      "Jira",
    ],
  },
  {
    company: "Cavisson Systems Inc",
    role: "Software Engineer",
    period: "Jul 2022 — Oct 2024",
    location: "Noida, India",
    blurb:
      "Cavisson builds enterprise performance testing, monitoring, and diagnostics software (NetDiagnostics — comparable to Dynatrace, New Relic, Datadog).",
    bullets: [
      "Debugged and enhanced ASP.NET MVC and ASP.NET Core MVC applications to improve performance and functionality.",
      "Implemented Entity Framework within MVC applications and applied design patterns (IoC, DIP, SOLID) to improve architecture and decoupling.",
      "Built and maintained .NET and .NET Core applications backed by MSSQL and Oracle.",
      "Conducted JMeter load testing to evaluate software performance under various conditions.",
      "Used Git / GitLab for version control across team projects.",
    ],
    stack: [
      "C#",
      ".NET Core",
      "ASP.NET MVC",
      "Entity Framework",
      "MSSQL",
      "Oracle",
      "JMeter",
    ],
  },
];

export type Project = {
  name: string;
  context: "work" | "personal";
  description: string;
  tags: string[];
  link?: string;
};

export type FeaturedProject = Project & {
  metric: string;
  metricLabel: string;
  accent: "cyan" | "violet" | "emerald";
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "AI Agent Pipelines",
    context: "work",
    description:
      "Internal AI workflows and agent pipelines that automate game-code generation and RTP/math verification — reducing boilerplate and catching defects earlier.",
    tags: ["AI Agents", "Workflows", "Automation", "RTP"],
    metric: "Automated",
    metricLabel: "code-gen + RTP checks",
    accent: "violet",
  },
  {
    name: "Buffalo Link",
    context: "work",
    description:
      "Owned key gameplay slices of the Buffalo Link module — symbol configuration, payline handling, and game-state behavior with focus on math correctness and release stability.",
    tags: ["TypeScript", "Game Logic", "RTP", "Mobile"],
    metric: "Shipped",
    metricLabel: "production module · Android + iOS",
    accent: "cyan",
  },
  {
    name: "Reusable Game Template Framework",
    context: "work",
    description:
      "Internal TypeScript framework: base game shell, configurable reel engine, payline + symbol configuration, and common setup components for every new title.",
    tags: ["TypeScript", "Framework", "Internal Tools"],
    metric: "~30%",
    metricLabel: "faster new-game delivery",
    accent: "emerald",
  },
];

export const projects: Project[] = [
  {
    name: "NFL SB Slots — Game Modules",
    context: "work",
    description:
      "Production slot-game modules shipped to Android and iOS. Implemented reel mechanics, paylines, bonus rounds, and the math-driven gameplay layer wired to backend APIs and analytics events.",
    tags: ["C#", "TypeScript", "Unity", "Mobile"],
  },
  {
    name: "HRMS Application",
    context: "personal",
    description:
      "Internal HR system — leave application + email notifications, employee activity tracking, admin approval flow, and a LAN-based employee chat module.",
    tags: ["C#", ".NET", "Web"],
  },
  {
    name: "Customer Churn Prediction",
    context: "personal",
    description:
      "Predictive model for a bank's customer churn rate. Covered data exploration, feature engineering, and supervised model comparison.",
    tags: ["Python", "Machine Learning"],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: [
      "C#",
      "TypeScript",
      "JavaScript",
      "C",
      "C++",
      "Python",
      "Java",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Runtimes",
    items: [
      ".NET / .NET Core",
      "ASP.NET MVC",
      "Entity Framework",
      "Unity",
      "React",
    ],
  },
  {
    title: "Mobile & Game",
    items: [
      "Unity architecture",
      "Android",
      "iOS",
      "Reel / spin mechanics",
      "Payline systems",
      "Game configuration",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "REST / SOAP",
      "WCF",
      "MSSQL",
      "Oracle",
      "IIS",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "AI agent pipelines",
      "Workflow automation",
      "Code-generation tooling",
      "Automated RTP / math verification",
    ],
  },
  {
    title: "Practices",
    items: [
      "SOLID",
      "Design Patterns",
      "IoC / DI",
      "Auth / Authorization",
      "SDLC",
      "Multithreading",
    ],
  },
  {
    title: "Tooling",
    items: ["Git", "GitLab", "GitLab CI/CD", "Jira", "JMeter"],
  },
];

export const education = {
  degree: "Bachelor of Technology",
  school: "GGSIP University",
  location: "New Delhi",
  period: "Aug 2018 — May 2022",
  result: "80%",
};

export const certifications = [
  "C# — GTBIT",
  "C++ — GTBIT",
  "Machine Learning — Internshala",
  "Android App Development — Internshala",
];
