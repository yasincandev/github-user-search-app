import React from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import "./Header.css";

const Header = ({ darkMode, handleDarkMode }) => {
  return (
    <header className={darkMode ? "header DarkHeader" : " header LightHeader"}>
      <h3
        className={
          darkMode
            ? "header__title Darkheader__title"
            : "header__title Lightheader__title"
        }
      >
        devfinder
      </h3>
      <button
        className={
          darkMode
            ? "theme__button Darktheme__button"
            : "theme__button Lighttheme__button"
        }
        onClick={handleDarkMode}
      >
        {darkMode ? "LIGHT" : "DARK"}
        <img
          src={darkMode ? Sun : Moon}
          alt={darkMode ? "Dark Mode Icon" : "Light Mode Icon"}
        />
      </button>
    </header>
  );
};

export default Header;
