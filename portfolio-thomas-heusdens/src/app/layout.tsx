import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const yellowTail = localFont({
  src: "./fonts/Yellowtail-Regular.ttf",
  variable: "--font-yellowtail",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thomas Heusdens",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yellowTail.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
