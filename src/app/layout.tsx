import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "../assets/icons/favicon.png";
import Rampuplogo from "../components/rampup-logo";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Ramp-Up | Your sustainable digital luxury app that helps you digitize your wardrobe, style fun outfits, buy and sell pre-loved luxury. Resale, Rent, Revive with Ramp-Up!",
  description: "Generated by create next app",
  icons: [{ rel: "icon", type: "x/logo", url: favicon.src }],
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        {/* <div className="flex min-h-screen flex-col items-center justify-between"> */}
        <div className="h-full w-full">
          <Rampuplogo />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
