import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
export default function Home() {
  return (
    <div className="App">
      <h1>Generouted</h1>
      <h2>It works!</h2>
      <nav className="flex flex-col gap-8">
        <Link to="/cool-route">Cool route here</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/rick-morty">Rick & Morty - How many characters</Link>
        <Link to="/streak-counter">Streak counter</Link>
        <Link to="/generouted-bug">Generouted bug</Link>
        <Link to="/use-location">useLocation</Link>
        <Link to="/api-params">API params</Link>
      </nav>
    </div>
  );
}
