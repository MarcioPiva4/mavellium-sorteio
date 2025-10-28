import type { Metadata } from "next";
import GoogleTagManager from "../components/GoogleTagManager";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mavellium",
  description: "Sorteio 30/10/2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <GoogleTagManager gtmId="GTM-TZ827BTR" />
        {children}
      </body>
    </html>
  );
}
