import type { Metadata } from "next";
import { Instrument_Serif, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onyekachi (Kachi) Justice Chinedu",
  description: "The official portfolio website of Onyekachi Justice Chinedu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.className} ${instrumentSerif.variable} ${dancingScript.variable}`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
