import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Sections/Footer";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
