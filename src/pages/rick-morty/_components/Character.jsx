export default function Character({
  i,
  name,
  image,
  species,
  gender,
  type,
  status,
  origin: { name: originName },
}) {
  return (
    <article
      className="outline-black outline-1 outline-solid rounded-xl min-w-[300px] min-h-[300px] m-2"
      key={i}
    >
      <img className="relative left-0 rounded-xl" src={image}></img>
      <p className="font-semibold">{name}</p>
      <span className="">
        {species} {gender.toLowerCase()} {type.toLowerCase()}
      </span>
      <p className="">{status}</p>
      <p className="">{originName}</p>
    </article>
  );
}
