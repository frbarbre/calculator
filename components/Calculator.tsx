"use client";

import { useState } from "react";
import { numbers } from "@/data";

export default function Calculator() {
  const [placeholder, setPlaceholder] = useState(0);
  const [firstArg, setFirstArg] = useState("");
  const [secondArg, setSecondArg] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState<null | number>(null);

  return (
    <section>
      {firstArg}
      {numbers.map((number) => (
        <h2
          key={number}
          onClick={() =>
            setFirstArg((prev) => (prev + number))
          }
        >
          {number}
        </h2>
      ))}
    </section>
  );
}
