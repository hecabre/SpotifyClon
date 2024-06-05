import { useApi } from "../../context/ApiContext";

function GenderInput() {
  const { gender, setGender } = useApi();
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <form className="text-purple-heart-800/80 dark:text-white">
      <select
        name="gender"
        value={gender}
        onChange={handleGenderChange}
        className="backdrop-blur-lg dark:bg-white/5 bg-white/30 block w-full p-2.5 rounded-lg dark:text-white text-purple-heart-800/80 "
      >
        <option value="all" className="backdrop-blur-lg  dark:text-purple-800">
          All
        </option>
        <option value="rap" className="backdrop-blur-lg  dark:text-purple-800">
          Rap
        </option>
        <option value="pop" className="backdrop-blur-lg  dark:text-purple-800">
          Pop
        </option>
        <option value="rb" className="backdrop-blur-lg  dark:text-purple-800">
          Rb
        </option>
        <option value="rock" className="backdrop-blur-lg dark:text-purple-800">
          Rock
        </option>
        <option
          value="country"
          className="backdrop-blur-lg dark:text-purple-800"
        >
          Country
        </option>
      </select>
    </form>
  );
}

export default GenderInput;
