import { Operators } from "@/types";

export function calculate(
  a: string | number,
  b: string,
  operator: "" | Operators,
  setState: (state: number) => void
) {
  if (operator === "plus") {
    setState(parseFloat(a as string) + parseFloat(b));
  }
  if (operator === "minus") {
    setState(parseFloat(a as string) - parseFloat(b));
  }
  if (operator === "divide") {
    setState(parseFloat(a as string) / parseFloat(b));
  }
  if (operator === "times") {
    setState(parseFloat(a as string) * parseFloat(b));
  }
}
