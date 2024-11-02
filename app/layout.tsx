import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Figma Design Assignment App",
  description: "Hanzala Waseem's Figma design assignment app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white antialiased font-sans`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}