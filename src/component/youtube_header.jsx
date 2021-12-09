import React from 'react';
import styles from './youtube_header.module.css';

const YoutubeHeader = (props) => (

  // const handleSearch = () => {
  //   this.props.onSearch();
  // };

  return (
  <div className={styles.header}>
    <div className={styles.logo}>
      <img className={styles.img} src="images/logo.png" alt="youtube logo" />
      <span className={styles.text}>Youtube</span>
    </div>

    <div className={styles.search}>
      <input className={styles.input} type="text" />
      <button className={styles.btn} onClick={handleSearch}>
        <img className={styles.searchimg} src="images/search.png" alt="search img" />
      </button>
    </div>

  </div>
);
  
);

export default YoutubeHeader;