
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/storeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} >
      <StoreProvider>
        <body className="min-h-full flex flex-col">{children}</body>
      </StoreProvider>
    </html>
  );
}
