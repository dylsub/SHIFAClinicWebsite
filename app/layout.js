import localFont from "next/font/local";
import { Lustria } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

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
const lustria = Lustria({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "SHIFA Clinic",
  description: "Free Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang={`en ${inter.className} ${lustria.className}`}>
      <body className={`${lustria.className} antialiased`}>{children}</body>
    </html>
  );
}
