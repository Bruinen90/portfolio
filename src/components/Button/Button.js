import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return(
        <div
            className={[
                styles.container,
                props.justFrame && styles.justFrame
            ].join(' ')}
            onClick={props.click}
        >
            {props.children}
        </div>
    );
};

export default Button;
