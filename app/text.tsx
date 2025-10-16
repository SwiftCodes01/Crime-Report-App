import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Application",
  description: "Mjy next application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black min-h-screen relative selection:bg-sky-500/50">
          <div className="fixed min-h-screen inset-0 -z-10">
            <div className="absolute h-full inset-0 bg-[radial ]" />
            <div className="absolute h-full inset-0 bg-[radial ]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
