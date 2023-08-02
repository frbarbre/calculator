import { Operators } from "@/types";

export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

export const operators = [
  {
    symbol: "+",
    type: Operators.plus,
  },
  {
    symbol: "-",
    type: Operators.minus,
  },
  {
    symbol: "/",
    type: Operators.divide,
  },
  {
    symbol: "x",
    type: Operators.times,
  },
];
