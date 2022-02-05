import React, { useState } from 'react';
import LoaderPlaceholder from '../LoaderPlaceholder/LoadingPlaceholder';
import styles from './Card.module.css';

export default function Card(props) {
  const [loaded, setLoaded] = useState(false);

  const stuffLoaded = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {!loaded && <LoaderPlaceholder extraStyles={{ height: '100%' }} />}
        <img
          className={styles.cardHeaderImg}
          src={props.mainImg}
          alt='Header'
          onLoad={stuffLoaded}
        />
      </div>
      <div className={styles.cardSub}>
        {!loaded ? (
          <LoaderPlaceholder
            extraStyles={{
              height: 15,
              marginBottom: 16,
              borderRadius: 10,
              width: '50%',
            }}
          />
        ) : (
          <h3>{props.title}</h3>
        )}
        {Array.from(Array(Math.ceil(props.subtitle.length / 500)).keys()).map(
          () =>
            !loaded && (
              <LoaderPlaceholder
                key={Math.floor(Math.random() * 1000)}
                extraStyles={{ height: 15, borderRadius: 10 }}
              />
            )
        )}
        {!loaded ? (
          <LoaderPlaceholder
            extraStyles={{ height: 15, marginBottom: 16, borderRadius: 10 }}
          />
        ) : (
          <p className={styles.infoText}>{props.subtitle}</p>
        )}
        <div className={styles.profile}>
          <div className={styles.profilePhotoContainer}>
            {!loaded && <LoaderPlaceholder extraStyles={{ height: '100%' }} />}
            <img
              className={styles.profilePhoto}
              src={props.profilePic}
              alt='Avatar'
              onLoad={stuffLoaded}
            />
          </div>
          <div>
            {!loaded ? (
              <LoaderPlaceholder
                extraStyles={{
                  height: 15,
                  width: 100,
                  borderRadius: 10,
                  margin: '4px 0',
                }}
              />
            ) : (
              <p className={styles.profileName}>{props.author}</p>
            )}
            {!loaded ? (
              <LoaderPlaceholder
                extraStyles={{
                  height: 15,
                  width: 120,
                  borderRadius: 10,
                  margin: '4px 0',
                }}
              />
            ) : (
              <p className={styles.profileDate}>{props.date}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
