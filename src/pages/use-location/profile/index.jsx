import { Link, useLocation } from "react-router-dom";

export default function Profile() {
  const { userName, name, age, location } = useLocation().state;
  return (
    <div className="bg-blue-200 px-12 py-2 my-2 rounded-md">
      <Link to="../">Go back</Link>
      <p>User name: {userName}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>
        Country: {location.country} City: {location.city}
      </p>
    </div>
  );
}
