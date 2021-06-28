import React from 'react';
import styles from './searchPage.module.css';
import Menu from '../Menu/Menu'
import { ReactComponent as PhotoIcon } from '../../images/photos.svg';

interface SearchPageProps {
    inputSearchText?: string;
}

function SearchPage(props: SearchPageProps) {
    return (
        <div>
            <Menu activeSearchBar={true} />
            <div className={styles.searchPageContainer}>
                <div className={styles.tabs}>
                    <div className={styles.leftTabs}>
                        <div className={styles.tab}>
                            <PhotoIcon className={styles.svgPhotoIcon} />
                            <p>Фото</p>
                            <span> · 213 тысяч</span>
                        </div>
                    </div>
                    <div className={styles.rightTabs}></div>
                </div>
                <h1>Фото На Тему "{props.inputSearchText ? props.inputSearchText : ''}"</h1>
            </div>
        </div>
    );
}

export default SearchPage;