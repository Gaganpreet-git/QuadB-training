import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onChange, placeholder , value }) => {
  return <input className={styles.searchBar} type="search" placeholder={placeholder} onChange={onChange} value={value} />;
};

export default SearchBar;
