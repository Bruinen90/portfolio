import React from 'react';
import styles from './FullInfo.module.css';
import closeIcon from '../../../img/icons/close_icon.svg';

const FullInfo = (props) => {
    return(
        <React.Fragment>
            <div className={styles.wrapper} style={{display: props.display}}>
                <div className={styles.container}>
                    <img
                        src={require(`../../../img/portfolio/${props.fullImgUrl}`)}
                        alt={props.title}
                        className={styles.fullImg}
                    />
                    <img
                        src={closeIcon}
                        alt="Zamknij"
                        className={styles.closeIcon}
                        onClick={props.clickClose}
                    />
                </div>
                <div
                    className={styles.cover}
                    onClick={props.clickClose}
                ></div>
            </div>
        </React.Fragment>
    );
};

export default FullInfo;
