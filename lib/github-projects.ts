export type GithubProject = {
  slug: string;
  name: string;
  repository: string;
  url: string;
  description: string;
  details: string[];
  technologies: string[];
  kind: string;
  liveUrl?: string;
};

export const githubProjects: GithubProject[] = [
  {
    slug: "f1-dashboard",
    name: "F1 Dashboard",
    repository: "f1-dashboard",
    url: "https://github.com/sikkaaryan/f1-dashboard",
    description: "A landscape-first F1-inspired dashboard made for iPhone.",
    details: [
      "Live analog and digital clocks with date and day.",
      "Weather information powered by Open-Meteo.",
      "Personal notes with local auto-save.",
      "Installable as a progressive web app.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Open-Meteo", "PWA"],
    kind: "Personal dashboard",
  },
  {
    slug: "staymatch",
    name: "StayMatch",
    repository: "staymatch",
    url: "https://github.com/sikkaaryan/staymatch",
    description: "A strict-filter stay finder for comparing Airbnb candidates against a set of requirements.",
    details: [
      "Builds search queries from location, dates, guests, budget, and must-have requirements.",
      "Validates Airbnb listing URLs and removes duplicate candidates.",
      "Keeps availability and requirement evidence unknown until there is support for them.",
      "Uses search discovery rather than scraping Airbnb listing pages.",
    ],
    technologies: ["Search APIs", "JavaScript", "Validation", "Automated tests"],
    kind: "Search and verification",
    liveUrl: "https://staymatch-six.vercel.app",
  },
  {
    slug: "clutch",
    name: "Clutch",
    repository: "COURT",
    url: "https://github.com/sikkaaryan/COURT",
    description: "A mobile-first music PWA with search, library, playlists, and a playback queue.",
    details: [
      "Search for tracks and play them through an embedded YouTube player.",
      "Manage a personal library and liked tracks.",
      "Build a queue and move between tracks.",
      "Includes sign-in and installable PWA support.",
    ],
    technologies: ["React", "Vite", "JavaScript", "YouTube", "PWA"],
    kind: "Music web app",
    liveUrl: "https://court-pi.vercel.app",
  },
  {
    slug: "slot-game",
    name: "Slot Game Prototype",
    repository: "game",
    url: "https://github.com/sikkaaryan/game",
    description: "A browser-based slot-game prototype built around a configurable reel and symbol system.",
    details: [
      "Five-reel, three-row game layout.",
      "Configurable symbols, reel strips, and win presentation.",
      "Separate game engine and payline evaluation modules.",
      "PixiJS rendering in a Next.js application.",
    ],
    technologies: ["Next.js", "TypeScript", "PixiJS"],
    kind: "Game prototype",
    liveUrl: "https://game-chi-silk.vercel.app",
  },
  {
    slug: "score-board",
    name: "Score Board",
    repository: "Scoreboard-",
    url: "https://github.com/sikkaaryan/Scoreboard-",
    description: "A round-based scorekeeper for keeping track of a group game.",
    details: [
      "Add players and set a score limit.",
      "Enter each round's score and follow running totals.",
      "Track eliminations and determine the winner.",
      "Includes animated transitions between rounds.",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    kind: "Small web app",
    liveUrl: "https://scoreboard-theta-ten.vercel.app",
  },
  {
    slug: "countdown-timer",
    name: "Countdown Timer",
    repository: "Countdown_Timer",
    url: "https://github.com/sikkaaryan/Countdown_Timer",
    description: "A full-screen countdown experience with an atmospheric, mobile-first presentation.",
    details: [
      "Designed around a full-viewport display.",
      "Uses layered ambient effects and motion.",
      "Includes a focused layout for phones and desktop screens.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    kind: "Web experience",
    liveUrl: "https://countdown-timer-two-mu.vercel.app",
  },
];

export function getGithubProject(slug: string) {
  return githubProjects.find((project) => project.slug === slug);
}
