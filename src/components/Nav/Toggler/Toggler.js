import React from 'react';
import styles from './Toggler.module.css';

const Toggler = (props) => {
    const buttonClasses = [styles.hamburger, styles.hamburgerSpin, props.menuVisible && styles.isActive];
    return(
        <button className={buttonClasses.join(' ')} type="button" onClick={props.click}>
            <span className={styles.hamburgerBox}>
                <span className={styles.hamburgerInner}></span>
            </span>
        </button>
    );
}
export default Toggler;
