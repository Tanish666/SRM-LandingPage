
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: {
    default: "SRM Institute of Science and Technology",
    template: "%s | SRM IST"
  },
  description: "SRM Institute of Science and Technology is a top-ranking university in India, offering a wide range of undergraduate, postgraduate, and doctoral programs.",
  keywords: ["SRM", "SRM IST", "University", "Engineering", "Science", "Technology", "Top University in India", "Best College"],
  authors: [{ name: "SRM Institute of Science and Technology" }],
  creator: "SRM IST",
  publisher: "SRM Institute of Science and Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SRM Institute of Science and Technology",
    description: "SRM Institute of Science and Technology is a top-ranking university in India.",
    url: "https://www.srmist.edu.in",
    siteName: "SRM IST",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SRM IST Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRM Institute of Science and Technology",
    description: "Top-ranking university in India offering various programs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`antialiased bg-white  ${inter.className} text-black`}
      >
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}

