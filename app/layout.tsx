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
        style={{
          background: "var(--color-surface-900)",
          margin: 0,
        }}
      >
        {/* GLOBAL VERTICAL LINES */}
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: "8%",
            width: "1px",
            backgroundColor: "rgba(255,255,255,0.1)",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />

        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            right: "8%",
            width: "1px",
            backgroundColor: "rgba(255,255,255,0.1)",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />

        {children}
      </body>
    </html>
  );
}
