"use client";

import { useThemeStore } from "@/app/store";
import ThemeSwitcher from "./ThemeSwitcher";
import { Themes } from "@/types";

export default function Header() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <header
      className={`${
        theme === Themes.dark
          ? "text-white"
          : theme === Themes.light
          ? "text-light-text"
          : theme === Themes.neon
          ? "text-neon-text"
          : ""
      } flex w-full items-end justify-between mb-[32px]`}
    >
      <h1 className={`font-bold tracking-[-0.533px] text-[32px] h-[38px]`}>calc</h1>
      <ThemeSwitcher />
    </header>
  );
}
