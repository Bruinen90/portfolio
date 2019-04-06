import React from 'react';
import styles from './Footer.module.css';
import SkewedSection from '../../components/SkewedSection/SkewedSection';
import NavItems from '../Nav/NavItems/NavItems';

const Footer = (props) => {
    const currYear = new Date().getFullYear();
    return(
        <div className={styles.container}>
            <SkewedSection
                skew={5}
                backgroundColor='#254651'
                justTop={true}
            >
                <div className={styles.content}>
                    <div className={styles.mainCont}>
                        <div className={styles.logoCont}>
                            <h2 className={styles.logo}>
                                Bruinen
                            </h2>
                            <h3 className={styles.caption}>
                                web development
                            </h3>
                        </div>
                        <ul className={styles.menuCont}>
                            <NavItems
                                clickLink={(item)=>props.clickLink(item)}
                            />
                        </ul>
                    </div>
                    <div className={styles.copyRight}>
                        ©Bruinen.pl {currYear}
                    </div>
                </div>

            </SkewedSection>
        </div>
    );
};

export default Footer;
