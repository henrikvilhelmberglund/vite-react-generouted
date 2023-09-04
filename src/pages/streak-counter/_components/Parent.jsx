import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [streaks, setStreaks] = useState(["eating", "programming", "meditating"]);
  return <>{streaks && streaks.map((streak) => <Child streak={streak}></Child>)}</>;
}
