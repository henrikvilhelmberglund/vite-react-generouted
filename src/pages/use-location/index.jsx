import UserList from "./_components/UserList";

export default function Index() {
  const users = [
    {
      userName: "CaptainFrisk",
      name: "Test Testsson",
      age: 99,
      location: {
        country: "Sweden",
        city: "Stockholm",
      },
    },
    {
      userName: "User2",
      name: "John Doe",
      age: 35,
      location: {
        country: "USA",
        city: "New York",
      },
    },
    {
      userName: "User3",
      name: "Jane Smith",
      age: 42,
      location: {
        country: "Canada",
        city: "Toronto",
      },
    },
    {
      userName: "User4",
      name: "Marta Martinez",
      age: 28,
      location: {
        country: "Spain",
        city: "Barcelona",
      },
    },
    {
      userName: "User5",
      name: "Ahmed Ali",
      age: 50,
      location: {
        country: "Egypt",
        city: "Cairo",
      },
    },
  ];

  return <>
    <UserList users={users} />
  </>;
}
