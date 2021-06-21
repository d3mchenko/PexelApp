import React from 'react';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import styles from './header.module.css';
import { listCategory } from '../../category';
import {Link} from 'react-router-dom';
import background from '../../images/test.jpg';

interface PropTypes {
  photograph?: string;
  photographLink?: string;
}


function Header(props: PropTypes) {
  const categories: Array<string> = listCategory.sort(
    () => 0.5 - Math.random()
  );
    return (
        <header>
          <Menu />
          <img
            src={background}
            className={styles.headerImage}
            alt="background"
          />
          <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h1>
              Лучшие бесплатные стоковые фото и видео от талантливых авторов.
            </h1>
            <Search text={`Ищите бесплатные фото и видео`} width={650} activeSearchBar={true}/>
            <div className={styles.offersWrapper}>
              <p>Идеи для поиска:</p>
                <div className={styles.linkWrapper}>
                {categories.slice(0,6).map( (category: string) => {
                  return (
                    <Link to={`/search/${category}`} key={category}>
                  {category}
                </Link>
                  )
                })}
                <a href={`https://www.pexels.com/popular-searches/`}>{'больше'}</a>
                </div>
            </div>
            </div>
          </div>
          <a href={props.photographLink} className={styles.photographLink}>Фотограф: {'Maksim Demchenko'}</a>
        </header>
      );
}

export default Header;