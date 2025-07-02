import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./_components/Footer";
import dynamic from "next/dynamic";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "westpearl.dev",
  description: "Created by jinjuseo",
  authors: [{ name: "jinjuseo" }],
  keywords: ["portfolio", "blog", "jinjuseo", "westpearl.dev"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
