import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          className={styles.cardHeaderImg}
          src={props.mainImg}
          alt='Header'
        />
      </div>
      <div className={styles.cardSub}>
        <h3>{props.title}</h3>
        <p className={styles.infoText}>{props.subtitle}</p>
        <div className={styles.profile}>
          <div className={styles.profilePhotoContainer}>
            <img
              className={styles.profilePhoto}
              src={props.profilePic}
              alt='Avatar'
            />
          </div>
          <div>
            <p className={styles.profileName}>{props.author}</p>
            <p className={styles.profileDate}>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
