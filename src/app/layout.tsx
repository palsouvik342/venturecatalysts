import type { Metadata } from "next";
import { Raleway } from 'next/font/google'
import "./globals.css";

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className} >
      <body>
        {children}
      </body>
    </html>
  );
}
