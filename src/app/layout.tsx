import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAL Architecture - Portfolio",
  description: "SAL Architecture is a design studio dedicated to creating exceptional spaces that blend form and function.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
