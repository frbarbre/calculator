import { numbers, operators } from "@/data";
import Button from "./Button";
import { Operators, Themes } from "@/types";
import { useThemeStore } from "@/app/store";

type Props = {
  handleNumberClick: (number: string) => void;
  handleOperatorClick: (operator: Operators) => void;
  handleEquals: () => void;
  handleReset: () => void;
  handleDelete: () => void;
  operator: string;
};

export default function Buttons({
  handleNumberClick,
  handleOperatorClick,
  handleEquals,
  handleReset,
  handleDelete,
  operator,
}: Props) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`grid-area gap-[13px] md:gap-[25px] gap-y-[17px] md:gap-y-[29px] p-[32px] mt-[24px] rounded-[10px] ${
        theme === Themes.dark
          ? "bg-dark-board"
          : theme === Themes.light
          ? "bg-light-board"
          : theme === Themes.neon
          ? "bg-neon-board"
          : ""
      }`}
    >
      {numbers.map((number) => (
        <Button
          key={number}
          text={number}
          handleClick={() => handleNumberClick(number)}
          gridArea={number === "." ? "dot" : number}
        />
      ))}

      {operators.map((symbol) => (
        <Button
          key={symbol.type}
          text={symbol.symbol}
          handleClick={() => handleOperatorClick(symbol.type)}
          gridArea={symbol.type}
          operator={operator}
          type={symbol.type}
        />
      ))}

      <Button
        text="="
        handleClick={handleEquals}
        gridArea="equal"
        hasSmallFont={true}
        bgColorDark="bg-dark-equal hover:bg-dark-equal-hover text-white"
        bgShadowDark="bg-dark-equal-shadow"
        bgColorLight="bg-light-equal hover:bg-light-equal-hover text-white"
        bgShadowLight="bg-light-equal-shadow"
        bgColorNeon="bg-neon-equal hover:bg-neon-equal-hover text-neon-equal-text"
        bgShadowNeon="bg-neon-equal-shadow"
      />
      <Button
        text="RESET"
        handleClick={handleReset}
        gridArea="reset"
        hasSmallFont={true}
        bgColorDark="bg-dark-delete hover:bg-dark-delete-hover text-white"
        bgShadowDark="bg-dark-delete-shadow"
        bgColorLight="bg-light-delete hover:bg-light-delete-hover text-white"
        bgShadowLight="bg-light-delete-shadow"
        bgColorNeon="bg-neon-delete hover:bg-neon-delete-hover text-white"
        bgShadowNeon="bg-neon-delete-shadow"
      />
      <Button
        text="DEL"
        handleClick={handleDelete}
        gridArea="delete"
        hasSmallFont={true}
        bgColorDark="bg-dark-delete hover:bg-dark-delete-hover text-white"
        bgShadowDark="bg-dark-delete-shadow"
        bgColorLight="bg-light-delete hover:bg-light-delete-hover text-white"
        bgShadowLight="bg-light-delete-shadow"
        bgColorNeon="bg-neon-delete hover:bg-neon-delete-hover text-white"
        bgShadowNeon="bg-neon-delete-shadow"
      />
    </div>
  );
}
