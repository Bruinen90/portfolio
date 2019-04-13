import React from 'react';
import styles from './FullInfo.module.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

import TechIcon from '../../TechIcon/TechIcon';
import Lightbox from '../../Lightbox/Lightbox';

import data from './FullInfo.json';

class FullInfo extends React.Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data);
    }
    render() {
        const techsOutput = this.props.techs.map(tech => {
            return(
                <TechIcon name={tech} key={tech}/>
            )
        })
        return(
            <Lightbox
                visible={this.props.visible}
                title={this.props.title}
                clickClose={this.props.clickClose}
            >
                <div className={styles.container}>
                    <img
                        src={require(`../../../img/portfolio/${this.props.fullImgUrl}`)}
                        alt={this.props.title}
                        className={styles.fullImg}
                    />
                    <div className={styles.infoCont}>
                        <div className={[styles.cell, styles.about].join(' ')}>
                            <h3 className={styles.infoHeader}>
                                <Translate id='aboutProjectHeader' />
                            </h3>
                            <p>
                                {this.props.aboutProject}
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
                    </div>
                </div>
            </Lightbox>
        );
    }
};

export default withLocalize(FullInfo);
