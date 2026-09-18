import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alphadesignstudio.com"),
  title: {
    default: "Alpha Design Studio | Interior Design Studio",
    template: "%s | Alpha Design Studio",
  },
  description:
    "Alpha Design Studio creates considered, livable interiors for residential and commercial spaces. Book a consultation with our design team today.",
  keywords: [
    "interior design studio",
    "interior designer",
    "residential interior design",
    "commercial interior design",
    "space planning",
    "styling and staging",
  ],
  openGraph: {
    title: "Alpha Design Studio | Interior Design Studio",
    description:
      "Interiors designed around how you live. Book a consultation with Alpha Design Studio.",
    url: "https://www.alphadesignstudio.com",
    siteName: "Alpha Design Studio",
    images: [
      {
        url: "/images/eames-lounge-sunroom.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Design Studio — considered interiors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Design Studio | Interior Design Studio",
    description:
      "Interiors designed around how you live. Book a consultation with Alpha Design Studio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">{children}</body>
    </html>
  );
}
