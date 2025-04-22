import React, { useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
const Form = ({ inputs, onSubmit }) => {
  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validate = (inputs) => {
    const newErrors = {};

    inputs.forEach((input) => {
      const { name, label, required, type } = input;
      const value = formData[name]?.trim() || "";

      if (required && !value) {
        newErrors[name] = `${label} is required`;
        return;
      }

      if (type === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          newErrors[name] = "Email is invalid";
        }
      }

      if (type === "password") {
        if (value.length < 8) {
          newErrors[name] = "Password must be at least 8 characters";
        }
      }
    });

    if (
      "password" in formData &&
      "confirmPassword" in formData &&
      formData.confirmPassword.trim() &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Confirm password does not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(inputs);

    if (!isValid) {
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Input
          key={input.name}
          {...input}
          error={errors[input.name] || ""}
          onChange={handleChange}
          value={formData[input.name] || ""}
          name={input.name}
        />
      ))}
      <Button className={styles.submitBtn} type="submit">
        Sign up
      </Button>
    </form>
  );
};

export default Form;
