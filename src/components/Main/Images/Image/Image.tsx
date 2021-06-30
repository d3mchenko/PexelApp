import React from 'react';
import styles from './image.module.css';
import { ReactComponent as DownloadIcon } from '../../../../images/download.svg';
import { ReactComponent as AddPhotoIcon } from '../../../../images/add-photo.svg';
import { ReactComponent as HeartIcon } from '../../../../images/heart.svg';

interface ImageProps {
    src: string;
    photographURL: string;
    photograph: string;
    photoId: number;
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
                    <HeartIcon className={styles.iconSVG} />
                </div>
            </div>
        </div>
    )
}

export default Image;