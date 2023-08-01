export enum Themes {
    dark = "dark",
    light = "light",
    neon = "neon"
}

export type ThemeStore = {
    theme: Themes
    setTheme: (theme: Themes) => void;
  }
  