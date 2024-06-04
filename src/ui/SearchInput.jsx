function SearchInput() {
  return (
    <section className="max-w-md ">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-purple-heart-800/80  rounded-lg  focus:ring-purple-heart-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-heart-500 outline-none placeholder:text-purple-heart-800/80  backdrop-blur-lg dark:bg-white/5 bg-white/30"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button className="text-white absolute end-2.5 bottom-2.5 bg-purple-heart-700 hover:bg-purple-heart-800 focus:ring-4 focus:outline-none focus:ring-purple-heart-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-heart-600 dark:hover:bg-purple-heart-700 dark:focus:ring-purple-heart-800">
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchInput;
