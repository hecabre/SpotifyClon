import { useApi } from "../context/ApiContext";

function GenderInput() {
  const { gender, setGender } = useApi();
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <form className="max-w-sm mx-auto">
      <select
        name="gender"
        value={gender}
        onChange={handleGenderChange}
        className="backdrop-blur-lg dark:bg-white/5 bg-white/30 block w-full p-2.5 rounded-lg dark:text-white text-purple-heart-800/80"
      >
        <option value="all">All</option>
        <option value="rap">Rap</option>
        <option value="pop">Pop</option>
        <option value="rb">Rb</option>
        <option value="rock">Rock</option>
        <option value="country">Country</option>
      </select>
    </form>
  );
}

export default GenderInput;
