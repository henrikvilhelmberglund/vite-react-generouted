import { useEffect, useState } from "react";
import RenderUser from "../_components/RenderUser";
import { useLoaderData, useNavigation } from "react-router-dom";

export default function Page() {
  let data2 = useLoaderData();
  const navigation = useNavigation();
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
      <h3>Loader, params, useNavigation</h3>
      {/* {JSON.stringify(data)} */}
      {/* <RenderUser {...data} /> */}
    </>
  );
}

export const Loader = async () => {
  console.log("Entered page");
  let response = await fetch("https://randomuser.me/api");
  let data = await response.json();
  
  return data.results[0].name.first;
};
