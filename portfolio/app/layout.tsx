import type { Metadata } from "next";
import "@fontsource-variable/fraunces/standard.css";
import "@fontsource-variable/work-sans/wght.css";
import "./globals.css";
import { profile } from "@/lib/data";

const siteUrl = "https://ishitakohli.com";
const title = `${profile.name} — Content Writer & SEO Content Writer`;
const description =
  "Portfolio of Ishita Kohli, a Content Writer and SEO Content Writer with published work on Gadgets 360 (NDTV) and Zeenik, specialising in SEO blogs, product writing and research documentation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ishita Kohli",
    "Content Writer",
    "SEO Content Writer",
    "Content Writing Portfolio",
    "SEO Blog Writer Delhi",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    images: [
      {
        url: profile.photo,
        width: 960,
        height: 1280,
        alt: profile.name,
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profile.photo],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
