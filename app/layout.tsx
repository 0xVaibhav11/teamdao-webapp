import "./globals.scss";
import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import localFont from "next/font/local";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--bebas-neue",
});
const teamDaoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--teamdao-typeface",
});
const calculator = localFont({
  src: [
    {
      path: "./Fonts/Technology.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Fonts/Technology-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Fonts/Technology-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Fonts/Technology-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--calc-typeface",
});
const calix = localFont({
  src: [
    {
      path: "./Fonts/BankGothic.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--calix-typeface",
});

export const metadata: Metadata = {
  title: "T.E.A.M DAO",
  description: "T.E.A.M DAO is a...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${bebasNeue.variable} ${teamDaoFont.variable} ${calix.variable} ${calculator.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
