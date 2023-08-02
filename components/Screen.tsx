import { useThemeStore } from "@/app/store";
import { Argument, Themes } from "@/types";

type Props = {
  result: null | number;
  firstArg: Argument;
  secondArg: Argument;
};

export default function Screen({ result, firstArg, secondArg }: Props) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`h-[128px] rounded-[10px] flex items-center justify-end px-[32px] font-bold text-[40px] tracking-[-0.67px] md:text-[56px] md:tracking-[-0.93px] ${
        theme === Themes.dark
          ? "bg-dark-screen"
          : theme === Themes.light
          ? "bg-light-screen text-light-text"
          : theme === Themes.neon
          ? "bg-neon-screen text-neon-text"
          : ""
      }`}
    >
      <div className="w-max">
        {firstArg.isActive && firstArg.content === "" && !result && <h2>0</h2>}
        {firstArg.isActive && firstArg.content !== "" && (
          <h2>{parseFloat(firstArg.content).toLocaleString()} </h2>
        )}
        {secondArg.isActive && secondArg.content === "" && !result && (
          <h2>{parseFloat(firstArg.content).toLocaleString()}</h2>
        )}
        {secondArg.isActive && secondArg.content !== "" && (
          <h2>{parseFloat(secondArg.content).toLocaleString()}</h2>
        )}
        {result && secondArg.content === "" && (
          <h2>{result?.toLocaleString()}</h2>
        )}
      </div>
    </div>
  );
}
