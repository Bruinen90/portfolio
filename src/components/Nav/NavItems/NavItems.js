import React from 'react';
import styles from './NavItems.module.css';

const NavItems = (props) => {
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
        <div className={styles.container}>
            {menuOutput}
        </div>
    );
};

export default NavItems;
