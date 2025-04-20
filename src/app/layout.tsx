import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/constants/site-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.SITE_URL),
  title: {
    default: siteMetadata.SITE_NAME,
    template: `%s | ${siteMetadata.SITE_NAME}`,
  },
  description: siteMetadata.SITE_DESC,
  openGraph: {
    title: siteMetadata.SITE_NAME,
    description: siteMetadata.SITE_DESC,
    siteName: siteMetadata.SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.SITE_NAME,
    description: siteMetadata.SITE_DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
