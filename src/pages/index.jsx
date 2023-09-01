import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
export default function Home() {
  return (
    <div className="App">
      <h1>Generouted</h1>
      <h2>It works!</h2>
      <Link to="/cool-route">Cool route here</Link>
      <br />
      <Link to="/blog">Blog</Link>
    </div>
  );
}
