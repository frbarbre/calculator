"use client";

import { useState } from "react";
import { numbers } from "@/data";
import { Operators } from "@/types";
import { calculate } from "@/hooks/calculate";
import Screen from "./Screen";

export default function Calculator() {
  const [result, setResult] = useState<null | number>(null);
  const [firstArg, setFirstArg] = useState({
    isActive: true,
    content: "",
  });
  const [secondArg, setSecondArg] = useState({
    isActive: false,
    content: "",
  });
  const [operator, setOperator] = useState<Operators | "">("");

  function handleNumberClick(number: string) {
    if (firstArg.isActive) {
      setFirstArg((prev) => ({
        ...prev,
        content: prev.content + number,
      }));
    }
    if (secondArg.isActive) {
      setSecondArg((prev) => ({
        ...prev,
        content: prev.content + number,
      }));
    }
    if (firstArg.content === "" && secondArg.content === "" && result) {
      setResult(null);
    }
  }

  function setArguments() {
    setFirstArg({
      isActive: false,
      content: result?.toString() as string,
    });
    setSecondArg({
      isActive: true,
      content: "",
    });
  }

  function handleOperatorClick(operators: Operators) {
    if (firstArg.isActive && firstArg.content !== "") {
      setFirstArg((prev) => ({
        ...prev,
        isActive: false,
      }));
      setSecondArg((prev) => ({
        ...prev,
        isActive: true,
      }));
    }

    if (firstArg.content !== "") {
      if (!result && secondArg.content !== "") {
        calculate(firstArg.content, secondArg.content, operator, setResult);
        setArguments();
      } else if (result) {
        calculate(result, secondArg.content, operator, setResult);
        setArguments();
      }
      setOperator(operators);
    }
  }

  function softReset() {
    setFirstArg({
      content: "",
      isActive: true,
    });
    setSecondArg({
      content: "",
      isActive: false,
    });
    setOperator("");
  }

  function handleReset() {
    softReset();
    setResult(null);
  }

  function handleEquals() {
    if (!result) {
      calculate(firstArg.content, secondArg.content, operator, setResult);
    } else {
      calculate(result, secondArg.content, operator, setResult);
    }
    softReset();
  }

  function handleDelete() {
    if (firstArg.isActive && firstArg.content !== "") {
      const deleteIndex = firstArg.content.length;
      const newContent = firstArg.content.slice(0, deleteIndex - 1);
      setFirstArg((prev) => ({
        ...prev,
        content: newContent,
      }));
    }
    if (secondArg.isActive && secondArg.content !== "") {
      const deleteIndex = secondArg.content.length;
      const newContent = secondArg.content.slice(0, deleteIndex - 1);
      setSecondArg((prev) => ({
        ...prev,
        content: newContent,
      }));
    }
  }

  return (
    <section>
      <Screen result={result} firstArg={firstArg} secondArg={secondArg} />
      {numbers.map((number) => (
        <h2 key={number} onClick={() => handleNumberClick(number)}>
          {number}
        </h2>
      ))}
      <div>
        <p
          className={`${operator === Operators.divide ? "text-lime-500" : ""}`}
          onClick={() => handleOperatorClick(Operators.divide)}
        >
          {Operators.divide}
        </p>
        <p
          className={`${operator === Operators.minus ? "text-lime-500" : ""}`}
          onClick={() => handleOperatorClick(Operators.minus)}
        >
          {Operators.minus}
        </p>
        <p
          className={`${operator === Operators.plus ? "text-lime-500" : ""}`}
          onClick={() => handleOperatorClick(Operators.plus)}
        >
          {Operators.plus}
        </p>
        <p
          className={`${operator === Operators.times ? "text-lime-500" : ""}`}
          onClick={() => handleOperatorClick(Operators.times)}
        >
          {Operators.times}
        </p>
        <p onClick={handleEquals}>=</p>
      </div>

      <p onClick={handleReset}>Reset</p>
      <p onClick={handleDelete}>Delete</p>
    </section>
  );
}
