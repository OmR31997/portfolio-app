import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dev = PORTFOLIO_DATA.developer;

export const metadata: Metadata = {
  title: `${dev.name} — ${dev.title}`,
  description: dev.bio,
  keywords: [
    'Node.js Developer',
    'NestJS Developer',
    'Backend Developer',
    'Node.js Backend Developer',
    'NestJS Developer India',
    'PostgreSQL Developer',
    'Docker Developer',
    'AWS Developer',
    'Backend API Developer',
    'Remote Backend Developer',
  ],
  authors: [{ name: dev.name }],
  creator: dev.name,
  openGraph: {
    title: `${dev.name} — ${dev.title}`,
    description: dev.bio,
    url: 'https://omrathore.dev',
    siteName: `${dev.name} Developer Portfolio`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${dev.name} — ${dev.title}`,
    description: dev.bio,
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
  const allSkillNames = PORTFOLIO_DATA.skills.flatMap((category) =>
    category.skills.map((skill) => skill.name)
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: dev.name,
    jobTitle: dev.title,
    description: dev.bio,
    knowsAbout: allSkillNames,
    sameAs: [dev.github, dev.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070a11] text-slate-200">
        {children}
      </body>
    </html>
  );
}
