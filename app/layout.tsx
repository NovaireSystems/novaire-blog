import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Novaire Systems",
  description:
    "AI & Software Engineering for Operational Platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}