import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, onClick ,className , type='button'}) => {
    const classes = `${styles.btn} ${className}`;
    return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
