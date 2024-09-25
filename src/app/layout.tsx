import "./globals.css";
import localFont from "next/font/local";
import {Ubuntu} from "next/font/google";

import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

const ubuntu = Ubuntu({
  weight: ['400','500'],
  style: "normal",
  variable: "--ubuntu",
  subsets:["latin"]
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}>
        <Menu></Menu>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
