import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "멋쟁이사자처럼 ⨉ 을지대학교",
  description: "코딩으로 세상을 바꾸는 청년들의 열정과 도전",
  icons: {
    icon: [
      {
        url: "/likelion-eulji.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/likelion-eulji.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/likelion-eulji.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/likelion-eulji.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='scroll-smooth'>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
