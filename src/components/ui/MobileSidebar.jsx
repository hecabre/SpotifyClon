import { useState } from "react";
import { FiMenu, FiX, FiHome, FiMusic } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div
          className={`absolute top-0 left-0 h-full px-5 w-1/2 bg-white/5 backdrop-blur-lg transform dark:text-purple-heart-100 text-purple-heart-800/80 font-bold z-10 transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <button
            className="fixed top-4 left-4 focus:outline-none z-50"
            onClick={toggleSidebar}
          >
            <FiX size={24} />
          </button>
          <div className="flex flex-col h-full justify-center items-center">
            <h1>Logo</h1>
            <ul className="space-y-4 mt-8 w-full">
              <li className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:text-purple-heart-50 hover:bg-purple-heart-500/90 dark:hover:text-purple-heart-800/80 dark:hover:bg-purple-heart-100 cursor-pointer w-full text-center">
                <FiHome size={24} />
                <span>Home</span>
              </li>
              <li className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:text-purple-heart-50 hover:bg-purple-heart-500/90 dark:hover:text-purple-heart-800/80 dark:hover:bg-purple-heart-100 cursor-pointer">
                <FiMusic size={24} />
                <span>Music</span>
              </li>
              <li
                className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:text-purple-heart-50 hover:bg-purple-heart-500/90 dark:hover:text-purple-heart-800/80 dark:hover:bg-purple-heart-100 cursor-pointer"
                onClick={toggleTheme}
              >
                {localStorage.theme === "dark" ? (
                  <MdLightMode />
                ) : (
                  <MdDarkMode />
                )}
                <span>
                  {localStorage.theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <FiMenu
          size={24}
          className="fixed top-8 left-4 focus:outline-none z-50 text-white cursor-pointer transition-all duration-300"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default MobileSidebar;
