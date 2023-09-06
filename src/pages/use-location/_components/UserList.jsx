import User from "./User";

export default function UserList({ users }) {
  return <>{users && users.map((user) => <User {...user} />)}</>;
}
