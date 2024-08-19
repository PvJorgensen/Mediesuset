import React from 'react';
import styles from './footer.module.scss';
import hancock from '../../assets/Images/footer-images/hancock.png';
import smag from '../../assets/Images/footer-images/smag.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>TILMELD NYHEDSBREV</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Indtast email"
          className={styles.inputField}
        />
        <button className={styles.inputButton}>Send</button>
      </div>
        <img src={hancock} alt="Hancock" className={styles.image} />
        <img src={smag} alt="Smag" className={styles.image} />
    </footer>
  );
};