import { useState } from "react";
import UserInfo from "./UserInfo";

export default function Post({ userId, title, body }) {
  const [showUser, setShowUser] = useState(false);
  return (
    <article className="outline-amber-400 outline-1 outline-solid">
      <h2>{title}</h2>
      <p>{body}</p>
      {showUser && <UserInfo></UserInfo>}
      <button onClick={() => setShowUser((p) => (p = !p))}>
        {showUser ? "Hide" : "Show"} user info
      </button>
    </article>
  );
}
