import React from 'react';
import Styles from './HistoryCardImage.module.scss'

const HistoryCardImage = (props) => {
    const { image } = props
    return (
        <div className={Styles.content}>
            <img src={image} />
        </div>
    );
};

export default HistoryCardImage;