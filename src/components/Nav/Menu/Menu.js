import React from 'react';
import styles from './Menu.module.css';

const Menu = (props) => {
    const menuClasses = [styles.container];
    if(props.show) {menuClasses.push(styles.show)}
    return(
        <div className={menuClasses.join(' ')}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    o nas
                </li>
                <li className={styles.item}>
                    oferta
                </li>
                <li className={styles.item}>
                    kontakt
                </li>
            </ul>
        </div>
    );
}
export default Menu;
