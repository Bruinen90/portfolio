import React from 'react';
import styles from './WelcomeLogo.module.css';

const WelcomeLogo = (props) => {
    const headersOutput = [];
    for(let i=0; i<4; i++) {
        headersOutput.push(
            <div
                className={[
                styles.header,
                !props.bulbsOff[i] && styles['header'+i],
                styles['textLightness'+props.lightPower],
            ].join(' ')}
                style={props.hideTextShadow ? {textShadow: 'none'} : {fontFamily: 'inherit'}}
                key={i}
            >
                Bruinen
            </div>
        )
    }
    return(
      <div className={styles.container}>
          <div className={styles.headerCont}>
                {headersOutput}
                <div
                    className={styles.sub}
                    style={{opacity: props.lightPower*0.1}}
                >
                    Web development
                </div>
          </div>
      </div>
    );
};

export default WelcomeLogo;
