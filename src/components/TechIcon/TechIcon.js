import React from 'react';
import styles from './TechIcon.module.css';

const TechIcon = (props) => {
    return(
        <img
            src={require(`../../img/techs/${props.name.replace(' ', '_')}.svg`)}
            alt={props.name}
            title={props.fullName}
            className={styles.icon}
        />
    );
};

export default TechIcon;
