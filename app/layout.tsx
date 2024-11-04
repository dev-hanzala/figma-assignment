import type { Metadata } from "next";
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
      <body className="bg-white antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
