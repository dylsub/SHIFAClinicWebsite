import localFont from "next/font/local";
import { Lustria } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToHeroButton from "./(components)/reusables/BackToHeroButton";
import ConditionalFooter from "./(components)/reusables/ConditionalFooter";

const lustria = Lustria({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "SHIFA Clinic",
  description: "Free Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang={`en ${inter.className} ${lustria.className}`}>
      <body className={`${lustria.className} antialiased`}>
        {children}
        <ConditionalFooter />
        <BackToHeroButton />
      </body>
    </html>
  );
}
