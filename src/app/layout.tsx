import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drimmaz - Find Your Dream Job",
  description: "Find the best job opportunities in South Africa",
  other: {
    "google-adsense-account": "ca-pub-8252140217295714",
  },
  verification: {
    google: "ca-pub-8252140217295714",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <meta name="google-adsense-account" content="ca-pub-8252140217295714" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
