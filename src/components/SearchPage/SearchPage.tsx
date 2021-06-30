import React, { MouseEvent } from 'react';
import styles from './searchPage.module.css';
import Menu from '../Menu/Menu'
import { ReactComponent as PhotoIcon } from '../../images/photos.svg';
import { ReactComponent as Orientation } from '../../images/orientation.svg';
import { ReactComponent as Horizontal } from '../../images/horizontal.svg';
import { ReactComponent as Vertical } from '../../images/vertical.svg';
import { ReactComponent as Square } from '../../images/square.svg';
import { ReactComponent as Size } from '../../images/size.svg';
import { ReactComponent as Selected } from '../../images/select.svg';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import { checkOrientationFilter } from '../../redux/actions';


interface SearchPageProps {
    orientation: string;
    checkOrientationFilter: Function;
}

function SearchPage(props: SearchPageProps) {
    const clickHandlerOrientation = (e: MouseEvent<HTMLLIElement>) => {
        props.checkOrientationFilter(e.currentTarget.dataset.check);
    }
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
                    <div className={styles.rightTabs}>
                        <div className={styles.dropdownMenu}>
                            <div className={styles.dropdownContentWrapper}>
                                <Orientation className={styles.filterIcons} />
                                <p>Ориентации</p>
                            </div>
                            <div className={styles.dropdownContent}>
                                <ul>
                                    <li className={props.orientation === 'all orientations' ? styles.selectedFilter : ''} data-check={'all orientations'} onClick={clickHandlerOrientation}>
                                        <p>Все варианты ориентации</p>
                                        <Selected className={props.orientation === 'all orientations' ? '' : styles.hidden} />
                                    </li>
                                    <li className={props.orientation === 'horizontal' ? styles.selectedFilter : ''} data-check={'horizontal'} onClick={clickHandlerOrientation}>
                                        <Horizontal />
                                        <p>Горизонтальная</p>
                                        <Selected className={props.orientation === 'horizontal' ? '' : styles.hidden} />
                                    </li>
                                    <li className={props.orientation === 'vertical' ? styles.selectedFilter : ''} data-check={'vertical'} onClick={clickHandlerOrientation}>
                                        <Vertical />
                                        <p>Вертикальная</p>
                                        <Selected className={props.orientation === 'vertical' ? '' : styles.hidden} />
                                    </li>
                                    <li className={props.orientation === 'square' ? styles.selectedFilter : ''} data-check={'square'} onClick={clickHandlerOrientation}>
                                        <Square />
                                        <p>Квадратное изображение</p>
                                        <Selected className={props.orientation === 'square' ? '' : styles.hidden} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.dropdownContentWrapper}>
                            <Size className={styles.filterIcons} />
                            <p>Размер</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return {
        orientation: state.filterReducer.orientation,
    }
}

const mapDispatchToProps = {
    checkOrientationFilter,
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);