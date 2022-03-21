import React, { useRef } from 'react';
import styles from '../search_header/search_header.module.css';


const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="youtube logo" />
        <h2 className={styles.title}>Youtube</h2>
      </div>
      <div className={styles.search}>
        <input className={styles.input} ref={inputRef} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img className={styles.buttonImg} src={process.env.PUBLIC_URL + "/images/search.png"} alt="serach" />
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;