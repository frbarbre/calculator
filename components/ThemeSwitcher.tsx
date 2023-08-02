"use client";

import { useThemeStore } from "@/app/store";
import { Themes } from "@/types";
import { shallow } from "zustand/shallow";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useThemeStore(
    (store) => [store.theme, store.setTheme],
    shallow
  );

  function handleToggle() {
    if (theme === Themes.dark) {
      setTheme(Themes.light);
    } else if (theme === Themes.light) {
      setTheme(Themes.neon);
    } else if (theme === Themes.neon) {
      setTheme(Themes.dark);
    }
  }

  return (
    <div className="flex gap-[26px] items-end">
      <h2 className="font-bold text-[12px] tracking-[1px] pb-[3px]">THEME</h2>
      <div className="w-[71px]">
        <div className="flex justify-between px-[7px] text-[12px] font-bold">
          <p className="cursor-pointer" onClick={() => setTheme(Themes.dark)}>
            1
          </p>
          <p className="cursor-pointer" onClick={() => setTheme(Themes.light)}>
            2
          </p>
          <p className="cursor-pointer" onClick={() => setTheme(Themes.neon)}>
            3
          </p>
        </div>
        <div
          className={`w-full h-[26px] rounded-full flex items-center px-[5px] ${
            theme === Themes.dark
              ? "bg-dark-board justify-start"
              : theme === Themes.light
              ? "bg-light-board justify-center"
              : theme === Themes.neon
              ? "bg-neon-board justify-end"
              : ""
          }`}
          onClick={handleToggle}
        >
          <div
            className={`${
              theme === Themes.dark
                ? "bg-dark-theme hover:bg-dark-theme-hover"
                : theme === Themes.light
                ? "bg-light-theme hover:bg-light-theme-hover"
                : theme === Themes.neon
                ? "bg-neon-theme hover:bg-neon-equal-hover"
                : ""
            } w-[16px] h-[16px] rounded-full`}
          />
        </div>
      </div>
    </div>
  );
}
