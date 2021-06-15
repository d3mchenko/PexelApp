import React from 'react';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import styles from './header.module.css';




function Header() {
    return (
        <header>
          <Menu />
          <div className={styles.content}>
            <h1>
              Лучшие бесплатные стоковые фото и видео от талантливых авторов.
            </h1>
            <Search />
            <div className={styles.suggestedWrapper}>
              <p>Идеи для поиска:</p>
            </div>
          </div>
        </header>
      );
}

export default Header;