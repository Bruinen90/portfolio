import React from 'react';
import styles from './FullInfo.module.css';
import TechIcon from '../../TechIcon/TechIcon';
import Lightbox from '../../Lightbox/Lightbox';

const FullInfo = (props) => {
    const techsOutput = props.techs.map(tech => {
        return(
            <TechIcon name={tech} key={tech}/>
        )
    })
    return(
        <Lightbox
            visible={props.visible}
            title={props.title}
            clickClose={props.clickClose}
        >
            <div className={styles.container}>
                <img
                    src={require(`../../../img/portfolio/${props.fullImgUrl}`)}
                    alt={props.title}
                    className={styles.fullImg}
                />
                <div className={styles.infoCont}>
                    <div className={[styles.cell, styles.about].join(' ')}>
                        <h3 className={styles.infoHeader}>O projekcie</h3>
                        <p>
                            Strona internetowa stworzona dla firmy X. Zlecenie komercyjne wykonane we współpracy z klientem.
                        </p>
                    </div>
                    <div className={[styles.cell, styles.myPart].join(' ')}>
                        <h3 className={styles.infoHeader}>Moja rola</h3>
                        <p>
                            {props.myRole}
                        </p>
                    </div>
                    <div className={[styles.cell, styles.techs].join(' ')}>
                        <h3 className={styles.infoHeader}>Użyte technologie</h3>
                        <div className={styles.icons}>
                            {techsOutput}
                        </div>
                    </div>
                </div>
            </div>
        </Lightbox>
    );
};

export default FullInfo;
