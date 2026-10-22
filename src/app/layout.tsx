import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.portfolio),
  title: `${SITE.name} | ${SITE.designation} — ${SITE.company}`,
  description: SITE.tagline,
  keywords: [
    "Moumita Chowdhury",
    "Karao Digital",
    "Technology Founder",
    "Digital Transformation",
    "AI Integration",
    "Website Development",
    "Digital Marketing",
    "Business Automation",
    "Creative Strategist",
  ],
  authors: [{ name: SITE.name, url: SITE.website }],
  openGraph: {
    title: `${SITE.name} | ${SITE.designation}`,
    description: SITE.tagline,
    url: SITE.portfolio,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.designation}`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
