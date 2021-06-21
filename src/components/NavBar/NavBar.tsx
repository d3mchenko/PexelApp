import React  from 'react';
import styles from './navbar.module.css';

function NavBar() {
    return (
        <div className = {styles.wrapperNavBar}>
            <a href='https://www.pexels.com/ru-ru/' className = {`${styles.activeLink}`}>Главная</a>
            <a href='https://www.pexels.com/ru-ru/discover/'>Найти</a>
            <a href='https://www.pexels.com/ru-ru/videos/'>Видео</a>
            <a href='https://www.pexels.com/ru-ru/leaderboard/'>Лучшие фотографы</a>
            <a href='https://www.pexels.com/ru-ru/challenges/'>Челенджи</a>
        </div>
    );
}

export default NavBar;