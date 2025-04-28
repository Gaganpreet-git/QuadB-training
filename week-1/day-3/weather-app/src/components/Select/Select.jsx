import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Select.module.css";

const Select = ({ options, onSelect }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchedValue(e.target.value);
    const value = e.target.value.toLowerCase();

    if (!value.trim()) {
      setFilteredOptions([]);
      return;
    }

    const filteredOptions = options.filter((option) =>
      option.value.toLowerCase().startsWith(value)
    );

    setFilteredOptions(filteredOptions);
  };

  const handleSelectedOption = (option) => {
    setSearchedValue("");
    onSelect(option);
    setFilteredOptions([]);
  };

  return (
    <div className={styles.container}>
      <SearchBar
        placeholder="Search for a city..."
        onChange={handleSearchInputChange}
        value={searchedValue}
      />
      {filteredOptions.length > 0 && (
        <ul className={styles.select}>
          {filteredOptions.map((option) => {
            return (
              <li
                key={option.key}
                value={option.value}
                onClick={() => {
                  handleSelectedOption(option);
                }}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
