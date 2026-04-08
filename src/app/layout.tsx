
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
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
  title: "SRM Institute of Science and Technology",
  description: "Official portal of SRM Institute of Science and Technology. Discover programs, news, and events.",
  keywords: "SRM, university, education, technology, institute",
  openGraph: {
    title: "SRM Institute of Science and Technology",
    description: "Official portal of SRM Institute of Science and Technology.",
    url: "https://srmist.edu.in",
    siteName: "SRMIST",
    locale: "en_IN",
    type: "website",
  },
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
        className={`antialiased bg-white/60  ${inter.className} text-black`}
      >
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}

