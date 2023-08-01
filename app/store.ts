import { ThemeStore, Themes } from "@/types";
import { createWithEqualityFn } from "zustand/traditional";

export const useThemeStore = createWithEqualityFn<ThemeStore>()((set) => ({
  theme: Themes.dark,
  setTheme: (theme) => set(() => ({ theme: theme })),
}), Object.is);
