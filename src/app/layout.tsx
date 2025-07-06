import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Refixy - Writing that works silently",
  description: "Unlike traditional grammar tools, Refixy works silently in the background. Select text, press a key, get better writing. Your focus stays unbroken. Built on Rust for blazing speed, privacy, and reliability.",
  keywords: ["writing tool", "grammar checker", "desktop app", "Rust", "privacy", "open source", "Mac app", "text improvement", "writing assistant"],
  authors: [{ name: "Refixy Team" }],
  creator: "Refixy",
  publisher: "Refixy",
  robots: "index, follow",
  icons: {
    icon: "/refixy-ico.png",
    shortcut: "/refixy-ico.png",
    apple: "/refixy-ico.png",
  },
  openGraph: {
    title: "Refixy - Writing that works silently",
    description: "Unlike traditional grammar tools, Refixy works silently in the background. Select text, press a key, get better writing. Your focus stays unbroken.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/refixy-og.png",
        width: 1200,
        height: 630,
        alt: "Refixy - Writing that works silently",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refixy - Writing that works silently",
    description: "Unlike traditional grammar tools, Refixy works silently in the background. Select text, press a key, get better writing.",
    images: ["/refixy-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
