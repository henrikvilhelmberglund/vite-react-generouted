import { Link } from "react-router-dom";

export default function User({ userName, name, age, location }) {
  return (
    <>
      {userName && <p>{userName}</p>}
      <Link state={{ userName, name, age, location }} to="./profile">
        Go to profile
      </Link>
    </>
  );
}
