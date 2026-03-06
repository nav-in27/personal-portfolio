import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Chatbot from "@/components/Chatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NAVEEN R | AI/ML Portfolio",
  description:
    "AI/ML Engineering Student portfolio — building intelligent systems, ML pipelines, and production-grade software. Built with Next.js & Framer Motion.",
  keywords: ["AI", "ML", "machine learning", "portfolio", "developer", "next.js"],
  authors: [{ name: "NAVEEN R" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#0f0f0f] text-[#e0e0e0]`}
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}

