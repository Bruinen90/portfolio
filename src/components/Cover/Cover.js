import React from 'react';
import styles from './Cover.module.css';

const Cover = (props) => {
    return(
        <div
            className={styles.container}
            onClick={props.clickCover}
            style={{display: props.visible ? 'block' : 'none'}}
        >
        </div>
    );
};

export default Cover;
