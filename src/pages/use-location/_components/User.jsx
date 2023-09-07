import { Link } from "react-router-dom";

export default function User({ userName, name, age, location }) {
  return (
    <div className="bg-blue-200 px-12 py-2 my-2 rounded-md">
      {userName && <p>{userName}</p>}
      <Link state={{ userName, name, age, location }} to="./profile">
        Go to profile
      </Link>
    </div>
  );
}
