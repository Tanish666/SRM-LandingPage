
import "./globals.css";
import type { Metadata } from "next";


import { Montserrat, Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Club Duelz | The Ultimate Football Matchmaking",
  description: "Elite matchmaking for the streets. Challenge rivals, rise through the ranks, and secure your legend in the local circuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased bg-[#050B18] text-slate-100 ${inter.variable} ${spaceGrotesk.variable} font-sans selection:bg-[#00F2FF] selection:text-[#050B18]`}
      >
        {children}
      </body>
    </html>
  );
}

