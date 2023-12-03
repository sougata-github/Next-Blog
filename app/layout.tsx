import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";

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
    <ThemeProvider>
      <html lang="en">
        <body className="max-w flex h-screen flex-col dark:bg-black dark:text-white">
          <Navbar />
          <main className="hide-scrollbar max-w mx-auto max-w-5xl flex-1 overflow-y-auto">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
