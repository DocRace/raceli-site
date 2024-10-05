import type { Metadata } from "next";
import { IBM_Plex_Sans, Kalnia } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

const kalnia = Kalnia({ 
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-kalnia',
});

export const metadata: Metadata = {
  title: "Race Li's Portfolio",
  description: "Personal portfolio of Race Li",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${ibmPlexSans.variable} ${kalnia.variable} antialiased`}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
