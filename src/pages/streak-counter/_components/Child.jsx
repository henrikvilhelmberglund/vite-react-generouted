import { useState } from "react";

export default function Child({ streak }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{streak}</h2>
      <p>{count}</p>
      <button onClick={() => setCount((p) => p - 1)}>-</button>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
    </>
  );
}
