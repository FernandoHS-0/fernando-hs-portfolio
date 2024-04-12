import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fernando HS",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base-dark">{children}</body>
    </html>
  );
}
