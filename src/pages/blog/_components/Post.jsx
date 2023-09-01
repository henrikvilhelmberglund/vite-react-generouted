import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

export default function Post({ userId, title, body, id }) {
  const [showUser, setShowUser] = useState(false);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
      );
      const data = await response.json();
      setComments(data);
    }
    fetchComments();
  }, []);
  return (
    <article className="outline-amber-400 outline-1 outline-solid">
      <h2>{title}</h2>
      <p>{body}</p>
      {showUser && <UserInfo userId={userId}></UserInfo>}
      <button onClick={() => setShowUser((p) => (p = !p))}>
        {showUser ? "Hide" : "Show"} user info
      </button>
      {comments &&
        comments.map(({ name, body }) => (
          <div>
            <span className="font-semibold">{name}: </span>
            <span>{body}</span>
          </div>
        ))}
    </article>
  );
}
