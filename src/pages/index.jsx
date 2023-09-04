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
      <br />
      <Link to="/rick-morty">Rick & Morty - How many characters</Link>
      <br />
      <Link to="/streak-counter">Streak counter</Link>
    </div>
  );
}
