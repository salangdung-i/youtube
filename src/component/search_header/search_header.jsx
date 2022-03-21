import React from 'react';
import styles from '../search_header/search_header.module.css';


const SearchHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="youtube logo" />
        <h2 className={styles.title}>Youtube</h2>
      </div>
      <div className={styles.search}>
        <input className={styles.input} type="search" placeholder="Search..." />
        <button className={styles.button}>
          <img className={styles.buttonImg} src={process.env.PUBLIC_URL + "/images/search.png"} alt="serach" />
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;