import React from "react";
import searchIcon from "../assets/icon-search.svg";
import "./Search.css";

const Search = ({
  darkMode,
  handleChange,
  getUser,
  value,
  user,
  errorText,
}) => {
  return (
    <div
      className={
        darkMode
          ? "search__container DarkSearch"
          : "search__container LightSearch"
      }
    >
      <img className="search__icon" src={searchIcon} alt="" />
      <div className="search__input__container">
        <input
          className="search__input"
          type="text"
          placeholder="Search GitHub username"
          onChange={handleChange}
          value={value}
        />
        <span className="search__error">{errorText}</span>
      </div>

      <button onClick={getUser} className="search__button">
        Search
      </button>
    </div>
  );
};

export default Search;
