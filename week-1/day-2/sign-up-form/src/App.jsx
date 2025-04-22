import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const handleSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully!");
  };

  const signupFormInputs = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your full name",
      name: "name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      name: "email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Re-enter your password",
      name: "confirmPassword",
      required: true,
    },
  ];
  return <Form inputs={signupFormInputs} onSubmit={handleSubmit} />;
}

export default App;
