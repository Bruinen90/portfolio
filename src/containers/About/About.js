import React, { Component } from 'react';
import styles from './About.module.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

import TechIcon from '../../components/TechIcon/TechIcon';
import MemorySocks from '../MemorySocks/MemorySocks';
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Header from '../../components/Header/Header';

import mainImg from '../../img/about_main.jpg';
import techs from '../../data/webTechs';
import data from './About.json';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCrazySocksGame: false
        }
        this.props.addTranslation(data)
    }
    render() {
        const skillsOutput = techs.map((skill, index) => {
            return(
                <div className={styles.iconCont} key={index}>
                    <TechIcon
                        name={skill.name}
                        fullName={skill.fullName}
                        small={true}
                    />
                </div>
            )
        })
        return (
            <React.Fragment>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.textCont}>
                            <div className={styles.headerCont}>
                                <Header>
                                    <Translate id="aboutHeader" />
                                </Header>
                            </div>
                            <div className={styles.text}>
                                <Translate id="mainText" />
                            </div>
                            <div className={styles.buttonsCont}>
                                <Button
                                    justFrame={true}
                                    click={this.props.goToPortfolio}
                                >
                                    <Translate id="buttons.portfolio" />
                                </Button>
                                <Button
                                    click={this.props.goToContact}
                                >
                                    <Translate id="buttons.contact" />
                                </Button>
                                <div className={styles.socialsCont}>
                                    <SocialIcons />
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagesCont}>
                            <div className={styles.techs}>
                                {skillsOutput}
                            </div>
                            <img
                                src={mainImg}
                                alt="Web developer"
                                className={styles.mainImg}
                            />
                        </div>
                    </div>
                </div>
                <MemorySocks
                    show={this.state.showCrazySocksGame}
                    hide={()=>this.setState({showCrazySocksGame: false})}
                />
            </React.Fragment>
        );
    }
}
export default withLocalize(About);
