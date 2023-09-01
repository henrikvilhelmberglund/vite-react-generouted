import Character from "./Character";

export default function Characters({ result }) {
  return (
    <>
      {result?.results?.map((data, i) => (
        <Character key={i} i={i} {...data} />
      ))}
    </>
  );
}
