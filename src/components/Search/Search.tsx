import React  from 'react';
import styles from './search.module.css';
import searchIcon from '../../images/magnifier-search.svg';



function Search() {
  return (
    <div className={`${styles.inputSearch}`}>
         <input type="text" placeholder="Поиск бесплатных изображений" className = {styles.input}></input>
         <img src={searchIcon} alt='Magnifier search'></img>
    </div>
  );
}

export default Search;