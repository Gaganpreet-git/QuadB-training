import React, { useEffect, useState } from "react";
import styles from "./PostPage.module.css";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../components/utils";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const post = await fetchPost(id);
      setPost(post);
    };
    getPost();
  }, []);

  const { title, author, date, body, thumbnail } = post || {};
  return (
    <div className={styles.postPage}>
      <h1>{title}</h1>
      <div className={styles.postMeta}>
        <span className={styles.postAuthor}>{author}</span>
        <span className={styles.postDate}>{date}</span>
      </div>
      <img className={styles.thumbnail} src={thumbnail} alt="Post Thumbnail" />
      <div className={styles.postContent}>{body}</div>
    </div>
  );
};

export default PostPage;
