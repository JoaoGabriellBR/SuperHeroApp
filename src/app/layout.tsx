
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Super Hero App",
  description: "Criado por João Gabriel Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-neutral-900 text-white`}>{children}</body>
    </html>
  );
}
