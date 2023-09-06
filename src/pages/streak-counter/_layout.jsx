import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Parent from "./_components/Parent";

export default function StreakCounter() {
  const [streaks, setStreaks] = useState([
    { activity: "eating", count: 3 },
    { activity: "programming", count: 4 },
    { activity: "meditating", count: 2 },
  ]);
  return (
    <>
      <Outlet context={{ streaks, setStreaks }} />
    </>
  );
}
