import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Sections/Footer";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: {
    default: "My company",
    template: "%s | My company",
  },
  description: "My company description",
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
