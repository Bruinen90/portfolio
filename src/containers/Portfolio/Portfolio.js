import React from 'react';
import styles from './Portfolio.module.css';
import ProjectFrame from '../../components/ProjectFrame/ProjectFrame';
import Header from '../../components/Header/Header';
import SkewedSection from '../../components/SkewedSection/SkewedSection';

import projectsList from '../../data/projects';

const Portfolio = (props) => {
    const animatedPictureIndex = Math.floor(projectsList.length*Math.random());

    const projectsOutput = projectsList.map((project, index) => {
        return(
            <ProjectFrame
                title = {project.name}
                img = {project.img}
                themeColour={project.themeColour}
                url = {project.url}
                techs = {project.techs}
                myRole = {project.myRole}
                // animated = {animatedPictureIndex === index}
                key = {index}
            />
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
                        Realizacje
                    </Header>
                </div>
                <div className={styles.grid}>
                    {projectsOutput}
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
};

export default Portfolio;
