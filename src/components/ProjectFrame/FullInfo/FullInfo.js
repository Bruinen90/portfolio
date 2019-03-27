import React from 'react';
import styles from './FullInfo.module.css';
import closeIcon from '../../../img/icons/close_icon.svg';
import Cover from '../../Cover/Cover';
import TechIcon from '../../TechIcon/TechIcon';

const FullInfo = (props) => {
    const techsOutput = props.techs.map(tech => {
        return(
            <TechIcon name={tech}  key={tech}/>
        )
    })
    return(
            <div
                className={styles.wrapper}
                style={{display: props.visible ? 'block' : 'none'}}
            >
                <div
                    className={styles.container}
                    style={{height: window.innerWidth > 768 ? '90vh' : `${window.innerHeight}px`}}
                >
                    <div className={styles.topBar}>
                        <h2 className={styles.projectTitle}>
                            {props.title}
                        </h2>
                        <img
                            src={closeIcon}
                            alt="Zamknij"
                            className={styles.closeIcon}
                            onClick={props.clickClose}
                        />
                    </div>
                    <img
                        src={require(`../../../img/portfolio/${props.fullImgUrl}`)}
                        alt={props.title}
                        className={styles.fullImg}
                    />
                    <div className={styles.infoCont}>
                        <div className={styles.about}>
                            <h3 className={styles.infoHeader}>O projekcie</h3>
                            <p>
                                Strona internetowa stworzona dla firmy X. Zlecenie komercyjne wykonane we współpracy z klientem.
                            </p>
                        </div>
                        <div className={styles.myPart}>
                            <h3 className={styles.infoHeader}>Moja rola</h3>
                            <p>
                                Witryna stworzona samodzielnie od podstaw - layout dla wersji komputerowej oraz mobilnej, zebranie i dopasowanie grafiki oraz napisanie responsywnego kodu.
                            </p>
                        </div>
                        <div className={styles.techs}>
                            <h3 className={styles.infoHeader}>Użyte technologie</h3>
                            <div className={styles.icons}>
                                {techsOutput}
                            </div>
                        </div>
                    </div>
                </div>
                <Cover
                    visible = {props.visible}
                    clickCover={props.clickClose}
                />
            </div>
    );
};

export default FullInfo;
