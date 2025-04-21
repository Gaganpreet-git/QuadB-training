import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ name, avatar, email, about }) => {
  return (
    <div className={styles.profileCard}>
        <div className={styles.avatarContainer}>
      <img className={styles.avatar} src={avatar} alt={name} />
        </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>
      <p className={styles.about}>{about}</p>
    </div>
  );
};

export default ProfileCard;
