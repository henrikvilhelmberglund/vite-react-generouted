import { useEffect } from "react";
import { useState } from "react";
import InfoText from "./_components/InfoText";
import Inputs from "./_components/Inputs";
import Characters from "./_components/Characters";

export default function Index() {
  const genders = ["All", "Male", "Female", "Genderless", "Unknown"];
  const species = "All, Human, Alien, Humanoid, Mythological Creature, Animal, Robot".split(", ");
  const statuses = "All, Alive, Dead, Unknown".split(", ");
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
        <Inputs
          {...{
            genders,
            species,
            statuses,
            fetchResult,
            setSelectedName,
            setSelectedGender,
            setSelectedStatus,
            setSelectedSpecies,
            setShouldFetch,
          }}
        />
        <InfoText {...{ selectedName, selectedGender, selectedSpecies, selectedStatus, result }} />
        <section className="flex flex-wrap justify-start w-[70vw] mx-auto">
          <Characters result={result} />
        </section>
      </main>
    </>
  );
}
