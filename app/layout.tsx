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
  title: "Atrium",
  description: "Education Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ background: "var(--color-surface-900)", margin: 0 }}
      >
        {/* GLOBAL VERTICAL LINES — aligned to container edge (max-w-320 = 1280px, half = 640px) */}
        {/* lg: ±640px from center · 2xl: ±720px from center (max-w-360 = 1440px) */}
        <div className="hidden lg:block 2xl:hidden fixed inset-y-0 left-1/2 -translate-x-160 w-px bg-white/10 pointer-events-none z-[999]" />
        <div className="hidden lg:block 2xl:hidden fixed inset-y-0 left-1/2  translate-x-160 w-px bg-white/10 pointer-events-none z-[999]" />
        <div className="hidden 2xl:block fixed inset-y-0 left-1/2 -translate-x-180 w-px bg-white/10 pointer-events-none z-[999]" />
        <div className="hidden 2xl:block fixed inset-y-0 left-1/2  translate-x-180 w-px bg-white/10 pointer-events-none z-[999]" />

        {children}
      </body>
    </html>
  );
}
