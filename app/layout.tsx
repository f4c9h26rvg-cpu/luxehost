import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxehostcleaning.co.uk"),

  title: {
    default: "LuxeHost Cleaning | Luxury Airbnb Cleaning London",
    template: "%s | LuxeHost Cleaning",
  },

  description:
    "Luxury Airbnb Cleaning, Linen Service and Property Management across London. Professional turnover cleaning trusted by Airbnb hosts and landlords.",

  keywords: [
    "Airbnb Cleaning London",
    "Luxury Cleaning London",
    "Airbnb Turnover",
    "Property Management",
    "Holiday Let Cleaning",
    "Short Let Cleaning",
    "Linen Service",
    "Cleaning Company London",
  ],

  authors: [
    {
      name: "LuxeHost Cleaning",
    },
  ],

  creator: "LuxeHost Cleaning",

  openGraph: {
    title: "LuxeHost Cleaning",
    description:
      "Luxury Airbnb Cleaning, Linen Service and Property Management across London.",
    url: "https://luxehostcleaning.co.uk",
    siteName: "LuxeHost Cleaning",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LuxeHost Cleaning",
    description:
      "Luxury Airbnb Cleaning, Linen Service and Property Management across London.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}