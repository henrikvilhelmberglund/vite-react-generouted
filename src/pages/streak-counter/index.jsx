import { Link } from "react-router-dom";
import Parent from "./_components/Parent";

export default function Index() {
  return (
    <>
      <Link to="./user">Add a new activity</Link>
      <Parent />
    </>
  );
}
