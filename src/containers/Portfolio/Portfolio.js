import React from 'react';
import styles from './Portfolio.module.css';
import ProjectFrame from '../../components/ProjectFrame/ProjectFrame';

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
                // animated = {animatedPictureIndex === index}
                key = {index}
            />
        )
    })
    return(
        <div className={styles.container}>
            {projectsOutput}
        </div>
    );
};

export default Portfolio;
