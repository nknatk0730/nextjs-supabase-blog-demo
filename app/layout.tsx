import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Next.js Supabase Blog",
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
        <div className="flex flex-col min-h-dvh">
          <Navigation />

          <main className="flex-1 max-w-screen-xl mx-auto px-5 py-10">{children}</main>

          <footer className="py-5 border-t sticky top-full">
            <div className="text-center text-sm text-gray-500">
              Copyright © All rights reserved | Nakano
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
