"use client";

import { useThemeStore } from "@/app/store";
import { Themes } from "@/types";

export default function Header() {
  const setTheme = useThemeStore((state) => state.setTheme);
  return (
    <header className="flex w-full justify-between">
      <h1>calc</h1>
      <div className="flex gap-4">
        <h2>THEME</h2>
        <div className="flex gap-2">
          <p onClick={() => setTheme(Themes.dark)}>1</p>
          <p onClick={() => setTheme(Themes.light)}>2</p>
          <p onClick={() => setTheme(Themes.neon)}>3</p>
        </div>
      </div>
    </header>
  );
}
