import React, { useEffect } from 'react';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import styles from './header.module.css';
import { listCategory } from '../../category';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBackgroundImageHeader, searchImages } from '../../redux/actions';
import { RootState } from '../../redux/rootReducer';
import { useInView } from 'react-intersection-observer';

interface HeaderProps {
  headerImage: string;
  photograph?: string;
  photographLink?: string;
  getBackgroundImageHeader: Function;
  searchImages: Function;
  currentPage: number;
}


function Header(props: HeaderProps) {
  const options = {
    threshold: 0.8,
  };
  const { ref, inView } = useInView(options);
  const categories: Array<string> = listCategory.sort(
    () => 0.5 - Math.random()
  );
  useEffect(() => {
    props.getBackgroundImageHeader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <header>
      <Menu activeSearchBar={inView ? false : true} />
      <img
        src={props.headerImage}
        className={styles.headerImage}
        alt="background"
        ref={ref}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1>
            Лучшие бесплатные стоковые фото и видео от талантливых авторов.
          </h1>
          <Search text={`Ищите бесплатные фото и видео`} width={650} activeSearchBar={true} />
          <div className={styles.offersWrapper}>
            <p>Идеи для поиска:</p>
            <div className={styles.linkWrapper}>
              {categories.slice(0, 6).map((category: string) => {
                return (
                  <Link to={`/search/${category}`} key={category} onClick={() => {
                    props.searchImages(category, props.currentPage); // проверить
                  }}>
                    {category}
                  </Link>
                )
              })}
              <a href={`https://www.pexels.com/popular-searches/`}>{'больше'}</a>
            </div>
          </div>
        </div>
      </div>
      <a href={props.photographLink} className={styles.photographLink}>Фотограф: {props.photograph}</a>
    </header>
  );
}

function mapStateToProps(state: RootState) {
  return {
    headerImage: state.headerReducer.headerImage,
    photograph: state.headerReducer.photograph,
    photographLink: state.headerReducer.photographLink,
    currentPage: state.imagesReducer.currentPage,
  };
}

const mapDispatchToProps = {
  getBackgroundImageHeader,
  searchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);