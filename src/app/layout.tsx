import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "@next/font/local"

const inter = Inter({ subsets: ["latin"] });

const varsity= localFont({
  src: './Mont-HeavyDEMO.otf',
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
      <body className={varsity.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
