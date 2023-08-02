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
      className={`h-[128px] rounded-[10px] ${
        theme === Themes.dark
          ? ""
          : theme === Themes.light
          ? ""
          : theme === Themes.neon
          ? ""
          : ""
      }`}
    >
      {firstArg.isActive && firstArg.content !== "" && (
        <h1>
          First: {parseFloat(firstArg.content).toLocaleString()} {firstArg.isActive.toString()}
        </h1>
      )}
      {secondArg.isActive && secondArg.content !== "" && (
        <h1>
          Second: {parseFloat(secondArg.content).toLocaleString()} {secondArg.isActive.toString()}
        </h1>
      )}
      {result !== null && secondArg.content === "" && (
        <h1 className="text-green-400">Result: {result?.toLocaleString()}</h1>
      )}
    </div>
  );
}
