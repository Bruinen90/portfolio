import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return(
        <h2
            className={styles.container}
            style={{
                color: props.color,
                fontSize: props.inheritFont && 'inherit'
            }}
        >
            {props.children}
            <div className={styles.bigShadow}>{props.children}</div>
        </h2>
    );
};

export default Header;
