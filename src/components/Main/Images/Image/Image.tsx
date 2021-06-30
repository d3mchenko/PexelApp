import React from 'react';
import styles from './image.module.css';
import { ReactComponent as DownloadIcon } from '../../../../images/download.svg';
import { ReactComponent as AddPhotoIcon } from '../../../../images/add-photo.svg';
import { ReactComponent as HeartIcon } from '../../../../images/heart.svg';
import { ReactComponent as HeartIconPut } from '../../../../images/put-like.svg';
import { connect } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { putLike, deleteLike } from '../../../../redux/actions';


interface ImageProps {
    src: string;
    photographURL: string;
    photograph: string;
    photoId: number;
    likes: Array<number>;
    putLike: Function;
    deleteLike: Function;
}

function Image(props: ImageProps) {
    return (
        <div className={styles.imageContainer}>
            <img src={props.src} alt='img' className={styles.image}></img>
            <div className={styles.infoImages}>
                <div className={styles.photographLink}>
                    <a href={props.photographURL}>{props.photograph}</a>
                </div>
                <div className={styles.svgButtons}>
                    <a href={`https://www.pexels.com/photo/${props.photoId}/download`}>
                        <DownloadIcon className={styles.iconSVG} />
                    </a>
                    <AddPhotoIcon className={styles.iconSVG} />
                    {props.likes.includes(props.photoId) ?
                        (<HeartIconPut className={styles.iconSVG} onClick={() => {
                            props.deleteLike(props.photoId);
                        }} />)
                        :
                        (<HeartIcon className={styles.iconSVG} onClick={() => {
                            props.putLike(props.photoId);
                        }} />
                        )}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        likes: state.imagesReducer.likes,
    };
}

const dispatchStateToProps = {
    putLike,
    deleteLike,
};

export default connect(mapStateToProps, dispatchStateToProps)(Image);