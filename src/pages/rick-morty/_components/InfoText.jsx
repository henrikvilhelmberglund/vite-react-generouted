export default function InfoText({
  selectedName,
  selectedGender,
  selectedSpecies,
  selectedStatus,
  result,
}) {
  return (
    <>
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
    </>
  );
}
