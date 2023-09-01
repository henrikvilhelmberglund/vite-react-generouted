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
      <p>this is a blog</p>
      {/* {posts} */}
      {posts?.map((post) => (
        <Post {...post}></Post>
      ))}
    </div>
  );
}
