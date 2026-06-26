import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://aryan-sikka.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aryan Sikka — Software Engineer II",
    template: "%s · Aryan Sikka",
  },
  description:
    "Software Engineer II at Aristocrat Technologies. C#, TypeScript, Unity, and AI workflows. Building production mobile game modules and agent-driven RTP automation.",
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
  authors: [{ name: "Aryan Sikka", url: SITE_URL }],
  creator: "Aryan Sikka",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aryan Sikka",
    title: "Aryan Sikka — Software Engineer II",
    description:
      "Software Engineer II at Aristocrat Technologies. C#, TypeScript, Unity, and AI workflows.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Sikka — Software Engineer II",
    description:
      "Software Engineer II at Aristocrat Technologies. C#, TypeScript, Unity, and AI workflows.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
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
  var t = localStorage.getItem('theme');
  if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  if (t === 'light') document.documentElement.setAttribute('data-theme','light');
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
      <body>{children}</body>
    </html>
  );
}
