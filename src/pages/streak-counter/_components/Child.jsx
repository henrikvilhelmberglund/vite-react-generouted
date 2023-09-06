import { useState } from "react";

export default function Child({ streak, inc, dec }) {
  return (
    <>
      <h2>{streak.activity}</h2>
      <p>{streak.count}</p>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
    </>
  );
}
