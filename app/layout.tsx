import "./globals.scss";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--bebas-neue",
});
const teamDaoFont = localFont({
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
  variable: "--teamdao-typeface",
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
        className={`${bebasNeue.variable} ${teamDaoFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
