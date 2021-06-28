import React from 'react';
import styles from './main.module.css';
import iconDropdown from '../../images/dropdown.svg';
import Images from './Images/Images';



function Main() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <p>Бесплатные стоковые фото</p>
                <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownContentWrapper}>
                        <p>Тенденции</p>
                        <img src={iconDropdown} alt='Dropdown Menu'></img>
                    </div>
                    <div className={styles.dropdownContent}>
                        <a href="https://www.pexels.com/ru-ru/">Тенденции</a>
                        <a href="https://www.pexels.com/ru-ru/new-photos/">Новые</a>
                    </div>
                </div>
            </div>
            <Images />
        </div>
    )
}

export default Main;