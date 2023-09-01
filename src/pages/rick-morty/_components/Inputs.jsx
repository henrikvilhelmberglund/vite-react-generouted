export default function Inputs({
  genders,
  species,
  statuses,
  setSelectedName,
  setSelectedGender,
  setSelectedSpecies,
  setSelectedStatus,
  setShouldFetch,
  fetchResult,
}) {
  return (
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
  );
}
