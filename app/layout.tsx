import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import ContactCTA from "./components/CTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coms Advance Engineering - Transforming Ideas into Reality",
  description: "Modern portfolio website for Coms Advance Engineering",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "eCHIO-2OpUeJ6VDdrZBF7CArj5cbpciRSYqQ4JV6uvg",
  },
  other: {
    "google-adsense-account": "ca-pub-9561929397474889",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9561929397474889"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
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
