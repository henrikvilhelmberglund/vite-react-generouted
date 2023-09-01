import { useEffect, useState } from "react";
import Post from "./Post";

export default function Blog() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      // console.log(posts);
    }
    getPosts();
  }, []);
  return (
    <div>
      <h1>Blog</h1>
      {/* {posts} */}
      {posts?.map((post, i) => (
        <Post {...post} key={i}></Post>
      ))}
    </div>
  );
}
