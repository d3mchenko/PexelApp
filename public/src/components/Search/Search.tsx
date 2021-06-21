import React  from 'react';
import styles from './search.module.css';
import searchIcon from '../../images/magnifier-search.svg';

interface PropTypes {
  text?: string;
  width?:number;
  activeSearchBar?:boolean;
}

function Search(props: PropTypes) {
  return (
    <div className={`${styles.inputSearch} ${props.activeSearchBar? '': styles.hideSearchBar}`} 
    style={{
      width: props.width ? `${props.width}px` : '',
    }}>
         <input type="text" placeholder = {props.text} className = {styles.input}></input>
         <img src={searchIcon} alt='Magnifier search'></img>
    </div>
  );
}

export default Search;