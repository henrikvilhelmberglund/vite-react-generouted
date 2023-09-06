import { Link } from "react-router-dom";

export default function User({ userName, name, age, location }) {
  return (
    <>
      {userName && <p>{userName}</p>}
      <Link to="/profile">Go to profile</Link>
    </>
  );
}
