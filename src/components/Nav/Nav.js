import React from 'react';
import styles from './Nav.module.css';
import Toggler from './Toggler/Toggler';
import Cover from '../Cover/Cover';

const Nav = (props) => {
    return(
        <div className={styles.wrapper}>
            <Toggler
                click = {props.clickToggler}
                menuVisible = {props.menuVisible}
            />
            <div className={[styles.menu, props.menuVisible && styles.menuVisible].join(' ')}>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem}>
                        Home
                    </li>
                    <li className={styles.menuItem}>
                        Portfolio
                    </li>
                    <li className={styles.menuItem}>
                        O mnie
                    </li>
                    <li className={styles.menuItem}>
                        Kontakt
                    </li>
                </ul>
            </div>
            <Cover
                visible = {props.menuVisible}
            />
        </div>
    );
};

export default Nav;
