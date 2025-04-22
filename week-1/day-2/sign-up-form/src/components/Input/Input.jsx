import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  label,
  error,
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.label} htmlFor="">
          {label}:
        </label>
      )}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className={styles.error}> {error ? error : "\u00A0"}</span>
    </div>
  );
};

export default Input;
