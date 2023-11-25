import Footer from "@/components/footer";
import NavBar from "@/components/NavBar";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
