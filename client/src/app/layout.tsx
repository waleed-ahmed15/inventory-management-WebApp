import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardWrapper from "@/app/DashboardWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WALL-E Stocks",
  description: "stocks related",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
