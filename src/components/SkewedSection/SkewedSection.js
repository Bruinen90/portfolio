import React from 'react';
import styles from './SkewedSection.module.css';

const SkewedSection = (props) => {
    return(
        <React.Fragment>
            <div
                className={[
                    styles.skewedBackground,
                    props.justTop && styles.justTop,
                ].join(' ')}
                style={{
                    transform: `skewY(${props.skew}deg)`,
                    backgroundColor: props.backgroundColor,
                }}
            ></div>
            {props.children}
        </React.Fragment>
    );
};

export default SkewedSection;
