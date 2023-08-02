"use client";

import "./globals.css";
import { League_Spartan } from "next/font/google";
import { useThemeStore } from "./store";
import { Themes } from "@/types";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body
        className={`${
          leagueSpartan.className
        } flex items-center justify-center min-h-screen transition-all ${
          theme === Themes.dark
            ? "bg-dark text-white"
            : theme === Themes.light
            ? "bg-light text-light-text"
            : theme === Themes.neon
            ? "bg-neon text-neon-text"
            : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
