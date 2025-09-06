import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Clara Engine - Digital Art & Forensic Dashboard",
  description: "A mythic-grade forensic dashboard for livestream analysis, deception profiling, and persona mapping. Digital art shop and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
