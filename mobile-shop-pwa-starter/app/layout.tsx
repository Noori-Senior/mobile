import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Shop (PWA Starter)",
  description: "Mobile-first starter you can deploy to Vercel right away.",
  themeColor: "#0d86ff",
  icons: { icon: "/icons/icon-192.png", apple: "/icons/icon-192.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen">
        <main className="max-w-md mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
