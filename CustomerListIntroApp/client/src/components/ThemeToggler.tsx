import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const loadTheme = () => {
    const mainElement = document.querySelector("html") as HTMLElement;
    if (theme === "light") {
      if (mainElement.classList.contains("dark"))
        mainElement.classList.remove("dark");
    } else {
      mainElement.classList.add("dark");
    }
  };

  useEffect(() => {
    loadTheme();
  }, [theme]);

  return (
    <div className="flex justify-end py-5">
      <button
        className="border border-gray-200 dark:border-0 dark:bg-gray-300 hover:bg-red-300 hover:dark:bg-red-300 py-2 px-4 rounded-md"
        onClick={() => toggleTheme()}
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};

export default ThemeToggler;
