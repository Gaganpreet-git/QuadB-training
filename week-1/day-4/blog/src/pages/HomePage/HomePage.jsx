import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import styles from "./HomePage.module.css";

const HomePage = ({ posts }) => {
  return (
    <div className={styles.homePage}>
      <div className={styles.contentArea}>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
