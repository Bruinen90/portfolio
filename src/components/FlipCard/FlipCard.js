import React from 'react';
import styles from './FlipCard.module.css';

const FlipCard = (props) => {
    return(
        <div
            className={[
                styles.container,
                props.active && styles.containerActive,
                props.matched && styles.containerMatched,
                props.hard && styles.hard,
            ].join(' ')}
            onClick={()=>props.click(props.value)}
        >
            <div className={styles.wrapper}>
                <div className={styles.front}>
                    {/* {props.front} */}
                </div>
                <div className={styles.back}>
                    <img
                        src={require(`../../img/socks/${props.value}.png`)}
                        className={styles.sockImg}
                        alt={'Skarpeta' + props.value}
                    />
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
