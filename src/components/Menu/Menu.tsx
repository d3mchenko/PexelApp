import React from 'react';
import logo from '../../images/logo.png';
import icon from '../../images/ellipsis.svg';
import styles from './menu.module.css';
import Search from '../Search/Search';

interface MenuProps {
    activeSearchBar?: boolean;
}

function Menu(props: MenuProps) {
    return (
        <div className={`${styles.navbar} ${props.activeSearchBar ? styles.activeMenu : ''}`}>
            <a className={styles.logoWrapper} href={'/'}>
                <img src={logo} alt="logo" />
                <p>Pexels</p>
            </a>
            <Search text={`Поиск бесплатных изображений`} activeSearchBar={props.activeSearchBar} />
            <div className={styles.navigation}>
                <ul className={styles.links}>
                    <li>
                        <a href={'https://www.pexels.com/license/'}>Найти фото</a>
                    </li>
                    <li>
                        <a href={'https://www.pexels.com/license/'}>Лицензия</a>
                    </li>
                    <li>
                        <a href={'https://www.pexels.com/join-contributor/'}>загрузить</a>
                    </li>
                    <li>
                        <img src={icon} alt="ellipsis" />
                    </li>
                </ul>
                <button className="join-button">Присоединиться</button>
            </div>
        </div>
    )
}

export default Menu;