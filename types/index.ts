export enum Themes {
    dark = "dark",
    light = "light",
    neon = "neon"
}

export type ThemeStore = {
    theme: Themes
    setTheme: (theme: Themes) => void;
}

export enum Operators {
    plus = "plus",
    minus = "minus",
    divide = "divide",
    times = "times"
}

export interface Argument {
    isActive: boolean;
    content: string;
}