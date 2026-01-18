import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Zakir Hossain",
    template: "%s | Zakir Hossain",
  },
  description:
    "Zakir Hossain – Laravel Developer, REST API Developer, and Web Application Developer specializing in scalable web solutions.",

  keywords: [
    "Zakir Hossain",
    "Laravel Developer",
    "REST API Developer",
    "Web Application Developer",
    "PHP Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Zakir Hossain" }],
  creator: "Zakir Hossain",

  openGraph: {
    title: "Zakir Hossain",
    description:
      "Laravel Developer, REST API Developer, and Web Application Developer.",
    url: "https://zakirhossain.online",
    siteName: "Zakir Hossain",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Zakir Hossain – Laravel Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zakir Hossain",
    description:
      "Laravel Developer, REST API Developer, and Web Application Developer.",
    images: ["/img/logo.png"],
  },

  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
