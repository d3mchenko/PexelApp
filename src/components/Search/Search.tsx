import React, { ChangeEvent, KeyboardEvent } from 'react';
import styles from './search.module.css';
import searchIcon from '../../images/magnifier-search.svg';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import { handleInputChangeValue, searchImages } from '../../redux/actions';


interface SearchProps {
  text?: string;
  width?: number;
  activeSearchBar?: boolean;
  handleInputChangeValue: Function;
  inputValue: string;
  searchImages: Function;
}

function Search(props: SearchProps) {
  const history = useHistory();
  return (
    <div className={`${styles.inputSearch} ${props.activeSearchBar ? '' : styles.hideSearchBar}`}
      style={{
        width: props.width ? `${props.width}px` : '',
      }}>
      <input type="text" placeholder={props.text} className={styles.input} onChange={
        (e: ChangeEvent<HTMLInputElement>) => {
          props.handleInputChangeValue(e.target.value);
        }} onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.code === 'Enter' && props.inputValue.length > 0 && props.inputValue !== ' ') {
            history.push(`/search/${props.inputValue}`);
            props.searchImages(props.inputValue);
          }
        }}></input>
      <img src={searchIcon} alt='Magnifier search' onClick={() => {
        if (props.inputValue.length > 0 && props.inputValue !== ' ')
          history.push(`/search/${props.inputValue}`);
        props.searchImages(props.inputValue);
      }}></img>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    inputValue: state.searchReducer.inputValue,
  };
}

const mapDispatchToProps = {
  handleInputChangeValue,
  searchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
