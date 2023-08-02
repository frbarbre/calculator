import { useThemeStore } from "@/app/store";
import { Operators, Themes } from "@/types";

type Props = {
  handleClick: () => void;
  text: string;
  gridArea: string;
  operator?: string;
  type?: Operators;
  bgColorDark?: string;
  bgColorLight?: string;
  bgColorNeon?: string;
  bgShadowDark?: string;
  bgShadowLight?: string;
  bgShadowNeon?: string;
  hasSmallFont?: boolean;
};

export default function Button({
  handleClick,
  text,
  gridArea,
  operator,
  type,
  bgColorDark,
  bgColorLight,
  bgColorNeon,
  bgShadowDark,
  bgShadowLight,
  bgShadowNeon,
  hasSmallFont,
}: Props) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`grid-${gridArea}
       h-[60px] sm:min-w-[60px] cursor-pointer relative`}
      onClick={handleClick}
    >
      <div
        className={`${
          theme === Themes.dark
            ? bgColorDark ||
              "bg-dark-btn text-dark-text hover:bg-dark-btn-hover"
            : theme === Themes.light
            ? bgColorLight || "bg-light-btn hover:bg-light-btn-hover"
            : theme === Themes.neon
            ? bgColorNeon || "bg-neon-btn hover:bg-neon-btn-hover"
            : ""
        } 

        ${
          operator === type && operator !== undefined
            ? theme === Themes.dark
              ? "bg-dark-btn-hover"
              : theme === Themes.light
              ? "bg-light-btn-hover"
              : theme === Themes.neon
              ? "bg-neon-btn-hover"
              : ""
            : ""
        }
        flex items-center justify-center rounded-[5px] md:rounded-[10px] z-10 relative h-[60px] transition-all`}
      >
        <h3
          className={`${
            hasSmallFont
              ? "text-[20px] tracking-[-0.33px] md:text-[28px] md:tracking-[-0.47px]"
              : "text-[32px] tracking-[-0.53px] md:text-[40px] md:tracking-[-0.67px]"
          } font-bold`}
        >
          {text}
        </h3>
      </div>
      <div
        className={`rounded-[5px] md:rounded-[10px] absolute inset-0 translate-y-[4px] ${
          theme === Themes.dark
            ? bgShadowDark || "bg-dark-shadow"
            : theme === Themes.light
            ? bgShadowLight || "bg-light-shadow"
            : theme === Themes.neon
            ? bgShadowNeon || "bg-neon-shadow"
            : ""
        }`}
      />
    </div>
  );
}
