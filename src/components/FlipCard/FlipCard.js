import React from 'react';
import styles from './FlipCard.module.css';

const FlipCard = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.front}>
                    {props.front}
                </div>
                <div className={styles.back}>
                    {props.back}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
