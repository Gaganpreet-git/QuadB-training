import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}><Link className={styles.link} to={'/'}>Blog</Link></div>
    </div>
  );
};

export default Logo;
