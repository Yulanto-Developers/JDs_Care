import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "About | Your Website",
  description: "Learn more about us",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-white`}>
      {/* Header */}
      <header className="py-6 bg-violet-600 text-white text-center text-2xl font-semibold">
        About Us
      </header>

      {/* Content */}
      <main className="container mx-auto py-10 px-4">
        {children}
      </main>
    </div>
  );
}
