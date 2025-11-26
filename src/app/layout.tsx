import type { Metadata } from "next";
import { Cormorant_Garamond, Questrial } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "600"],
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "7point83club | Tune Into Earth's Frequency",
  description: "Join the 7.83 Club and tune into Earth's frequency. Experience the science and spirit of resonance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${questrial.variable} font-body bg-bg-deep text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
