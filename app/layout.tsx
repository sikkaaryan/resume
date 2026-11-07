import type { Metadata, Viewport } from "next";
import "./globals.css";
import AmbientSoundProvider from "@/components/portfolio/AmbientSoundProvider";

export const metadata: Metadata = {
  title: {
    default: "Aryan Sikka — Engineering Portfolio",
    template: "%s · Aryan Sikka",
  },
  description:
    "Aryan Sikka is a software engineer building production systems, cross-platform game experiences, reusable frameworks, and AI-assisted engineering workflows.",
  keywords: [
    "Aryan Sikka",
    "Software Engineer",
    "Aristocrat Technologies",
    "Cavisson Systems",
    "C#",
    "TypeScript",
    "Unity",
    "AI Agents",
    "Game Development",
    ".NET",
    "Noida",
    "India",
  ],
  authors: [{ name: "Aryan Sikka" }],
  creator: "Aryan Sikka",
  openGraph: {
    type: "website",
    siteName: "Aryan Sikka",
    title: "Aryan Sikka — Engineering Portfolio",
    description:
      "A portfolio of production software, game technology, reusable engineering systems, and AI-assisted automation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Sikka — Engineering Portfolio",
    description:
      "A portfolio of production software, game technology, reusable engineering systems, and AI-assisted automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInit = `
(function(){try{
  var t = localStorage.getItem('portfolio-theme');
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  else document.documentElement.removeAttribute('data-theme');
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body><AmbientSoundProvider>{children}</AmbientSoundProvider></body>
    </html>
  );
}
