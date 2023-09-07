import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>API & Params</h1>
      <nav className="flex flex-col gap-4">
        
      <Link to="./">Home</Link>
      <Link to="./page">Go to page</Link>
      </nav>
      <Outlet />
    </>
  );
}
