import React from 'react';
import styles from './Portfolio.module.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

import ProjectFrame from '../../components/ProjectFrame/ProjectFrame';
import Header from '../../components/Header/Header';
import SkewedSection from '../../components/SkewedSection/SkewedSection';

import data from './Portfolio.json';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data)
    }
    render() {
        const projectsOut = Object.entries(data.projects).map(([name, info]) => {
            return(
                <div key = {name}>
                <ProjectFrame
                    title = {name}
                    img = {info.img}
                    themeColour={info.themeColour}
                    url = {info.url}
                    techs = {info.techs}
                    myRole = <Translate id={`projects.${name}.myRole`} />
                />
            </div>
            )
        })
        return(
            <div className={styles.container}>
                <SkewedSection
                    skew={-7}
                    backgroundColor='#F1ECE5'
                >
                    <div className={styles.headerCont}>
                        <Header
                            color="#254651"
                            inheritFont={true}
                        >
                            <Translate id='header' />
                        </Header>
                    </div>
                    <div className={styles.grid}>
                        {projectsOut}
                    </div>

                    <div className={styles.headerCont}>
                        <Header
                            color="#254651"
                            inheritFont={true}
                        >
                            Realizacje
                        </Header>
                    </div>
                </SkewedSection>
            </div>
        );
    }
};

export default withLocalize(Portfolio);
