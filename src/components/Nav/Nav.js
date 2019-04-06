import React from 'react';
import styles from './Nav.module.css';
import Toggler from './Toggler/Toggler';
import Cover from '../Cover/Cover';
import NavItems from './NavItems/NavItems';

const Nav = (props) => {
    return(
        <div className={styles.wrapper}>
            <Toggler
                click = {props.clickToggler}
                menuVisible = {props.menuVisible}
            />
            <div className={[styles.menu, props.menuVisible && styles.menuVisible].join(' ')}>
                <ul className={styles.menuItems}>
                    <NavItems
                        clickLink={(item)=>props.clickLink(item)}
                    />
                </ul>
            </div>
            <Cover
                visible = {props.menuVisible}
            />
        </div>
    );
};

export default Nav;
