import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  const profileData = {
    name: "Alice Smith",
    avatar: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg",
    email: "alice@example.com",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
  return (
    <>
      <ProfileCard {...profileData} />
    </>
  );
}

export default App;
