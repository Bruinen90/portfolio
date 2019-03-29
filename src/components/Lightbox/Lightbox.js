import React from 'react';
import styles from './Lightbox.module.css';
import Cover from '../Cover/Cover';
import closeIcon from '../../img/icons/close_icon.svg';

const Lightbox = (props) => {
    return(
        <div
            className={styles.wrapper}
            style={{
                display: props.visible ? 'block' : 'none',
            }}
        >
            <div
                className={styles.container}
                style={{
                    height: window.innerWidth > 768 ?
                        '90vh' : `${window.innerHeight}px`,
                    backgroundColor: props.background,
                }}
            >
                <div className={styles.topBar}>
                    <h2 className={styles.title}>
                        {props.title}
                    </h2>
                    <img
                        src={closeIcon}
                        alt="Zamknij"
                        className={styles.closeIcon}
                        onClick={props.clickClose}
                    />
                </div>
                {props.children}
            </div>
            <Cover
                visible = {props.visible}
                clickCover={props.clickClose}
            />
        </div>
    );
};

export default Lightbox;
