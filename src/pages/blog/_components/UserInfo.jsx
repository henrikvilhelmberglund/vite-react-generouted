import { useEffect, useState } from "react";

export default function UserInfo({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, []);
  return (
    <>
      {user && (
        <>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </>
      )}
    </>
  );
}
