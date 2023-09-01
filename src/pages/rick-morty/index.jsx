import { useEffect } from "react";
import { useState } from "react";

export default function Index() {
  const genders = ["All", "Male", "Female", "Genderless", "Unknown"];
  const species = "All, Human, Alien, Humanoid, Mythological Creature, Animal, Robot".split(", ");
  const statuses = "All, Alive, Dead, Unknown".split(", ");
  const [startFetch, setStartFetch] = useState(false);
  const API = "https://rickandmortyapi.com/api/character/?";

  const [selectedName, setSelectedName] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (shouldFetch) {
      fetchResult();
    }
  }, [selectedName, selectedGender, selectedSpecies, selectedStatus]);

  async function fetchResult() {
    // old version
    // const finalQuery = `
    //   ${selectedName ? "name=" + selectedName + "&" : ""}
    //   ${selectedGender !== "All" ? "gender=" + selectedGender + "&" : ""}
    //   ${selectedSpecies !== "All" ? "species=" + selectedSpecies + "&" : ""}
    //   ${selectedStatus !== "All" ? "status=" + selectedStatus : ""}
    //   `
    //   // this breaks mythological creature
    //   .replaceAll(" ", "")
    //   .replaceAll("\n", "");

    const query = [];
    if (selectedName) query.push(`name=${encodeURIComponent(selectedName)}`);
    if (selectedGender !== "All") query.push(`gender=${encodeURIComponent(selectedGender)}`);
    if (selectedSpecies !== "All") query.push(`species=${encodeURIComponent(selectedSpecies)}`);
    if (selectedStatus !== "All") query.push(`status=${encodeURIComponent(selectedStatus)}`);
    const finalQuery = query.join("&");

    const response = await fetch(`${API}${finalQuery}`);
    const data = await response.json();
    console.log(`${API}${finalQuery}`);
    console.log(data);
    setResult(data);
  }

  return (
    <>
      <h1>Rick & Morty - How many characters</h1>

      <main className="flex flex-col mx-auto  ">
        <div className="flex flex-col mx-auto w-64 [&>*]:m-2 [&>*]:p-2">
          <input
            onBlur={(e) => {
              setSelectedName(e.target.value);
              setShouldFetch(true);
            }}
            type="text"
            placeholder="Name"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                setSelectedName(e.target.value);
              }
            }}
          />
          <select
            onChange={(e) => {
              setSelectedGender(e.target.value);
              setShouldFetch(true);
            }}
            name=""
            id=""
          >
            {genders.map((gender, i) => (
              <option key={i} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setSelectedSpecies(e.target.value);
              setShouldFetch(true);
            }}
            name=""
            id=""
          >
            {species.map((specie, i) => (
              <option key={i} value={specie}>
                {specie}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setShouldFetch(true);
            }}
            name=""
            id=""
          >
            {statuses.map((status, i) => (
              <option key={i} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              fetchResult();
            }}
          >
            Get characters
          </button>
        </div>
        <p>
          You're looking for {selectedName ? `someone named ${selectedName}` : `anyone`} with
          {selectedGender === "All" ? " any gender" : ` a ${selectedGender} gender`} of
          {selectedSpecies === "All" ? " any species" : ` a ${selectedSpecies} species`} with
          {selectedStatus === "All" ? " any status " : ` the status ${selectedStatus}`}
        </p>
        {result?.info?.count && (
          <p className="text-lg font-semibold">
            {result?.info?.count} matching {result?.info?.count > 1 ? "characters" : "character"}
          </p>
        )}
        {result?.error && <p>No characters were found.</p>}
        <section className="flex flex-wrap justify-start w-[70vw] mx-auto">
          {result?.results?.map(
            ({ name, species, gender, type, status, image, origin: { name: originName } }, i) => (
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
            )
          )}
        </section>
      </main>
    </>
  );
}
