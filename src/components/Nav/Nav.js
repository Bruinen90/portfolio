import React from 'react';
import styles from './Nav.module.css';
import Toggler from './Toggler/Toggler';
import Cover from '../Cover/Cover';

const Nav = (props) => {
    const menuItems = [
        {
            fullName: 'Home',
            sectionName: 'home',
        },
        {
            fullName: 'Portfolio',
            sectionName: 'portfolio',
        },
        {
            fullName: 'O mnie',
            sectionName: 'about'
        },
        {
            fullName: 'Kontakt',
            sectionName: 'contact'
        }
    ]
    const menuOutput = menuItems.map(item => {
        return(
            <li
                className={styles.menuItem}
                onClick={()=>props.clickLink(item.sectionName)}
                key={item.sectionName}
            >
                {item.fullName}
            </li>
        )
    })
    return(
        <div className={styles.wrapper}>
            <Toggler
                click = {props.clickToggler}
                menuVisible = {props.menuVisible}
            />
            <div className={[styles.menu, props.menuVisible && styles.menuVisible].join(' ')}>
                <ul className={styles.menuItems}>
                    {menuOutput}
                </ul>
            </div>
            <Cover
                visible = {props.menuVisible}
            />
        </div>
    );
};

export default Nav;
