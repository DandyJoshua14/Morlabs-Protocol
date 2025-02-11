import type { Metadata } from "next";
import { Montserrat, Roboto_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://morlabsprotocol.com"),
  keywords: ["morlabs", "morlabs protocol", "api and sdk", "best api and sdk", "transition from web2 to web3"],
  title: { default: "Morlabs Protocol", template: `%s | Morlabs Protocol` },
  openGraph: { description: "An API & SDK directory for developers" },
};
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
