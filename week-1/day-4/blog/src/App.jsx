import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage/PostPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { fetchPosts } from "./components/utils";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
