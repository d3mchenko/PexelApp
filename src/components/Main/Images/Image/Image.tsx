import React from 'react';
import styles from './image.module.css';

interface ImageProps {
    src: string;
}

function Image(props: ImageProps) {
    return (
        <div className={styles.imageContainer}>
            <img src={props.src} alt='img' className={styles.image}></img>
        </div>
    )
}

export default Image;