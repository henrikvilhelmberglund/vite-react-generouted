import { useState } from "react";
import Parent from "../_components/Parent";
import { Link, useOutletContext } from "react-router-dom";

export default function User() {
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityCount, setNewActivityCount] = useState(0);
  // const [userActivity, setUserActivity] = useState({});
  let { streaks, setStreaks } = useOutletContext();

  // function addActivity() {
  //   setUserActivity({ activity: newActivityName, count: newActivityCount });
  // }

  function addActivity() {
    let newStreaks = [...streaks, { activity: newActivityName, count: newActivityCount }];
    setStreaks(newStreaks);
  }

  return (
    <>
      <div className="flex flex-col">
        <Link to="../">Go back to streak-counter</Link>
        <label htmlFor="name">New activity name</label>
        <input onChange={(e) => setNewActivityName(e.target.value)} type="text" name="name" id="" />
        <label htmlFor="count">New activity count</label>
        <input
          onChange={(e) => setNewActivityCount(e.target.valueAsNumber)}
          type="number"
          name="count"
          id=""
        />
        <button onClick={() => addActivity()}>Add activity</button>
      </div>
      <Parent></Parent>
    </>
  );
}
