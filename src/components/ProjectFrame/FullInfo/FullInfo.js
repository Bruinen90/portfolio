import React from 'react';
import styles from './FullInfo.module.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import ReactSVG from 'react-svg'

import TechIcon from '../../TechIcon/TechIcon';
import Lightbox from '../../Lightbox/Lightbox';
import Button from '../../Button/Button';
import visitIcon from '../../../img/icons/visit.svg';
import goBackIcon from '../../../img/icons/goBack.svg';

import data from './FullInfo.json';

class FullInfo extends React.Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data);
    }
    render() {
        const techsOutput = this.props.techs.map(tech => {
            return(
                <TechIcon name={tech} fullName={tech.fullName} key={tech}/>
            )
        });
        return(
            <Lightbox
                visible={this.props.visible}
                title={this.props.title}
                clickClose={this.props.clickClose}
            >
                <div className={styles.container}>
                    <img
                        src={require(`../../../img/portfolio/${this.props.imgFilename}.png`)}
                        alt={this.props.title}
                        className={styles.fullImg}
                    />
                    <div className={styles.infoCont}>
                        <div className={[styles.cell, styles.about].join(' ')}>
                            <h3 className={styles.infoHeader}>
                                <Translate id='aboutProjectHeader' />
                            </h3>
                            <p>
                                {this.props.about}
                            </p>
                        </div>
                        <div className={[styles.cell, styles.myPart].join(' ')}>
                            <h3 className={styles.infoHeader}>
                                <Translate id='myRoleHeader' />
                            </h3>
                            <p>
                                {this.props.myRole}
                            </p>
                        </div>
                        <div className={[styles.cell, styles.techs].join(' ')}>
                            <h3 className={styles.infoHeader}>
                                <Translate id='techsHeader' />
                            </h3>
                            <div className={styles.icons}>
                                {techsOutput}
                            </div>
                        </div>
                        <div className={styles.buttonsCont}>
                            <Button
                                click = {()=>window.open(this.props.url, '_blank')}
                                withIcon = {true}
                            >
                                    <ReactSVG
                                        src={visitIcon}
                                        svgClassName={styles.buttonIcon}
                                    />
                                    <Translate id='visitWebpage' />
                            </Button>
                            <Button
                                justFrame = {true}
                                click = {this.props.clickClose}
                                withIcon = {true}
                                >
                                    <ReactSVG
                                        src={goBackIcon}
                                        svgClassName={styles.buttonIcon}
                                    />
                                    <Translate id='goBack' />
                                </Button>
                        </div>
                    </div>
                </div>
            </Lightbox>
        );
    }
};

export default withLocalize(FullInfo);
