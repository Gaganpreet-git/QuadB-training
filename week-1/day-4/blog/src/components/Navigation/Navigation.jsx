import React from "react";
import styles from "./Navigation.module.css";
import {  NavLink } from "react-router-dom";

const Navigation = ({ navItems ,className , showMobileNav , closeMenu }) => {
  const classes = showMobileNav ? `${styles.navigation} ${className} ${styles.show}` : `${styles.navigation} ${className}`;
  
  return (
    <nav className={classes}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.href} className={({ isActive }) => (isActive ? styles.active : styles.navLink) } onClick={closeMenu}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
