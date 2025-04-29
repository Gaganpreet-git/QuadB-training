import React from "react";
import styles from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";

const PostCard = ({ thumbnail, title, body, date, author, id }) => {
  const navigate = useNavigate();

  const shortDescription =
    body.length > 100 ? body.slice(0, 100) + "..." : body;

  const handleClick = () => {
    navigate(`/post/${id}`, { state: { title, author, date, body , thumbnail } });
  };

  return (
    <div className={styles.postCard} onClick={handleClick}>
      <div className={styles.postImage}>
        <img src={thumbnail} alt="Post Thumbnail" className={styles.image} />
      </div>
      <div className={styles.postContent}>
        <div className={styles.postMeta}>
          <div className={styles.postAuthor}>{author}</div>
          <div className={styles.postDate}>{date}</div>
        </div>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={styles.postDescription}>{shortDescription}</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
    </div>
  );
};

export default PostCard;
