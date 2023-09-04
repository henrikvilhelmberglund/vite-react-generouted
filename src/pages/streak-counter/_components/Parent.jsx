import { useEffect, useState } from "react";
import Child from "./Child";

export default function Parent({ userActivity }) {
  const [streaks, setStreaks] = useState([
    { activity: "eating", count: 3 },
    { activity: "programming", count: 4 },
    { activity: "meditating", count: 2 },
  ]);

  useEffect(() => {
    if (userActivity) {
      setStreaks((p) => [...p, userActivity]);
    }
  }, [userActivity]);

  function updateCount(incI, value) {
    setStreaks((p) => {
      return p.map((streak, i) => {
        if (i === incI) {
          return { activity: streak.activity, count: streak.count + value };
        } else {
          return streak;
        }
      });
    });
  }

  return (
    <>
      {streaks &&
        streaks.map(
          (streak, i) =>
            Object.keys(streak).length > 0 && (
              <Child
                key={i}
                streak={streak}
                inc={() => updateCount(i, 1)}
                dec={() => updateCount(i, -1)}
              ></Child>
            )
        )}
    </>
  );
}
