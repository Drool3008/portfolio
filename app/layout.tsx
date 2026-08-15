import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Developer & Product`,
  description:
    "Dhawal Pawanarkar — full-stack developer and product-minded M.Tech (Product Design & Management) student at IIIT Hyderabad. I build software and shape products.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Node.js",
    "React",
    "IIIT Hyderabad",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Developer & Product`,
    description:
      "Full-stack developer and product-minded builder. Building real, usable products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={`antialiased font-sans ${montserrat.className}`}>{children}</body>
    </html>
  );
}
