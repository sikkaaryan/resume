import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Sikka — Software Engineer",
  description:
    "Software Engineer II at Aristocrat Technologies. C#, TypeScript, Unity. Building production mobile game modules and reusable frameworks.",
  metadataBase: new URL("https://aryan-sikka.vercel.app"),
  openGraph: {
    title: "Aryan Sikka — Software Engineer",
    description:
      "Software Engineer II at Aristocrat Technologies. C#, TypeScript, Unity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
