import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Image from './Image/Image';
import styles from './images.module.css';
import { RootState } from '../../../redux/rootReducer';
import { getImagesMain, searchImages, setFetching, searchImagesPagination } from '../../../redux/actions';
import { ImageObjectTypes } from '../../../redux/imagesReducer';
import { useLocation } from 'react-router-dom';





interface ImagesProps {
    photos: ImageObjectTypes[];
    getImagesMain: Function;
    currentPage: number;
    searchImages: Function;
    fetching: boolean;
    setFetching: Function;
    searchImagesPagination: Function;
}

function Images(props: ImagesProps) {
    console.log(props.photos);
    const location = useLocation();

    const checkPathname = () => {
        const pathnamePage = location.pathname.split('/').filter((elemQuery) => {
            return elemQuery !== 'search';
        }).join('');
        return pathnamePage;
    }

    let searchQuery = checkPathname();

    useEffect(() => {
        if (props.fetching) {
            if (location.pathname === '/') {
                props.getImagesMain(props.currentPage);
            }
            else {
                props.searchImagesPagination(searchQuery, props.currentPage);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            props.setFetching(true);
        }
    }

    if (props.photos.length === 0) {
        return (<h2 className={styles.emptyResult}>Нету результата по данному запросу</h2>)
    }


    return (
        <div>
            <h1 className={styles.textSearch}>{`${location.pathname !== '/' ? `Фото На Тему "${checkPathname()}"` : ''}`}</h1>
            <div className={styles.imagesContainer}>
                {props.photos.map((photo) => (
                    <Image src={`${photo.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=400`} photographURL={photo.photographer_url} photograph={photo.photographer} photoId={photo.id} />
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        photos: state.imagesReducer.photos,
        currentPage: state.imagesReducer.currentPage,
        fetching: state.imagesReducer.fetching,
    };
}

const mapDispatchToProps = {
    getImagesMain,
    searchImages,
    setFetching,
    searchImagesPagination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
