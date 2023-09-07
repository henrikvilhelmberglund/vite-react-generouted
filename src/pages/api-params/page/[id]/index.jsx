import { useEffect, useState } from "react";
import RenderUser from "../../_components/RenderUser";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";

export default function Page() {
  let data2 = useLoaderData();
  const navigation = useNavigation();
  const params = useParams();
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(`https://randomuser.me/api`);
  //     const data = await response.json();
  //     setData(data.results[0]);
  //   }
  //   fetchData();
  // }, []);

  if (navigation.state === "loading") {
    return <div>I'm getting your data! Please hold! </div>;
  }

  return (
    <>
      <h2>Page {data2}</h2>
      <h2>My params: Id {params.id}</h2>
      <h3>Loader, params, useNavigation</h3>
      {/* {JSON.stringify(data)} */}
      {/* <RenderUser {...data} /> */}
    </>
  );
}

export const Loader = async ({ params }) => {
  console.log("Entered page");
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  let data = await response.json();

  return data.name;
};
