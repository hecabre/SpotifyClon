import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <div className="flex items-center justify-center text-purple-heart-800/80  rounded-lg  px-2 focus:ring-purple-heart-500  dark:placeholder-white dark:text-white dark:focus:ring-purple-heart-800 outline-none placeholder:text-purple-heart-800/80  backdrop-blur-lg dark:bg-white/5 bg-white/30 w-32 r">
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 text-sm text-purple-heart-800/80  rounded-lg  focus:ring-purple-heart-500  dark:placeholder-white dark:text-white dark:focus:ring-purple-heart-800 outline-none placeholder:text-purple-heart-800/80  dark:bg-transparent bg-transparent "
        placeholder="Search"
        required
      />
      <FaSearch className="cursor-pointer" />
    </div>
  );
}

export default SearchInput;
