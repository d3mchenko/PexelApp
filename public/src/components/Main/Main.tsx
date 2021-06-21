import React from 'react';
import styles from './main.module.css';
import iconDropdown from '../../images/dropdown.svg';


interface PropTypes {
}

function Main(props: PropTypes) {
    return (
        <div className = {styles.mainContainer}>
            <div className = {styles.titleContainer}>
                <p>Бесплатные стоковые фото</p>
                <div className = {styles.dropdownMenu}>
                    <div className = {styles.dropdownContentWrapper}>
                        <p>Тенденции</p>
                        <img src = {iconDropdown} alt = 'Dropdown Menu'></img>
                    </div>
                    <div className = {styles.dropdownContent}>
                        <a href="https://www.pexels.com/ru-ru/">Тенденции</a>
                        <a href="https://www.pexels.com/ru-ru/new-photos/">Новые</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;