export default function Post({ userId, title, body }) {
  return (
    <article className="outline-amber-400 outline-1 outline-solid">
      <h2>{title}</h2>
      <p>{body}</p>
      <button>Show user info</button>
    </article>
  );
}
