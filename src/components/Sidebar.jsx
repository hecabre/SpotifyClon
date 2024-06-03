import { useState } from "react";
import { FiMenu, FiX, FiHome, FiMusic } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full backdrop-blur-lg  bg-white/5 transition-transform transform dark:text-purple-heart-100 text-purple-heart-800/80 font-bold ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-64`}
    >
      <div className="flex items-center justify-between p-4 ">
        <h1>Logo</h1>
        <button
          className={`focus:outline-none md:hidden`}
          onClick={toggleSidebar}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:text-purple-heart-50 hover:bg-purple-heart-500/90 dark:hover:text-purple-heart-800/80 dark:hover:bg-purple-heart-100 cursor-pointer">
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
            {localStorage.theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            <span>
              {localStorage.theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
