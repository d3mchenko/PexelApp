import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Image from './Image/Image';
import styles from './images.module.css';
import { RootState } from '../../../redux/rootReducer';
import { getImagesMain, searchImages } from '../../../redux/actions';
import { ImageObjectTypes } from '../../../redux/imagesReducer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



interface ImagesProps {
    photos: ImageObjectTypes[];
    getImagesMain: Function;
    currentPage: number;
    searchImages: Function;
}

function Images(props: ImagesProps) {
    const location = useLocation();
    const [fetching, setFetching] = useState(true);
    useEffect(() => {
        if (fetching) {
            if (location.pathname === '/') {
                props.getImagesMain(props.currentPage);
                setFetching(false);
            }
            else {
                let test = location.pathname;
                props.searchImages(test);
                setFetching(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    }


    return (
        <div className={styles.imagesContainer}>
            {props.photos.map((photo) => (
                <Image src={`${photo.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=400`} />
            ))}
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        photos: state.imagesReducer.photos,
        currentPage: state.imagesReducer.currentPage,
    };
}

const mapDispatchToProps = {
    getImagesMain,
    searchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
