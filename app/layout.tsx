import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Snowfall from "./components/Snowfall";
import ContactCTA from "./components/CTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhlaq's Portfolio",
  description: "Modern portfolio website for Akhlaq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Snowfall />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ContactCTA />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
