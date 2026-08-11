import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import ContactCTA from "./components/CTA";
import JsonLd from "./components/JsonLd";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Coms Advance Engineering - Transforming Ideas into Reality",
    template: "%s | Coms Advance Engineering",
  },
  description: siteConfig.description,
  keywords: [
    "software development company",
    "custom web application development",
    "mobile app development",
    "Flutter app development",
    "AI integration services",
    "full stack development",
    "Coms Advance Engineering",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Coms Advance Engineering - Transforming Ideas into Reality",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "/logo.png", width: 500, height: 500, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coms Advance Engineering - Transforming Ideas into Reality",
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.logo,
  description: siteConfig.description,
  sameAs: [siteConfig.linkedin],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1049930410847638');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1049930410847638&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
