import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Blog posting app in NextJS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w hide-scrollbar flex min-h-screen flex-1 flex-col overflow-y-auto">
        <Navbar />
        <main className="hide-scrollbar max-w mx-auto h-screen max-w-5xl flex-1 overflow-y-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
