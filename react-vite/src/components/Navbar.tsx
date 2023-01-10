import { Link } from "react-router-dom";
import { useContext } from "react";

import Button from "./Button";

import { ThemeContext } from "utils/context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar bg-base-100 dark:bg-gray-700 justify-between">
      <div className="flex">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          Cinephile
        </Link>
        <Link
          to="/favorites"
          className="btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          Favorite
        </Link>
        <Link
          to="/sandbox"
          className="btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          Sandbox
        </Link>
      </div>
      <div>
        <Button label="Theme" onClick={() => handleTheme()} />
      </div>
    </div>
  );
};

export default Navbar;
