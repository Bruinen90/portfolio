import React from 'react';
import styles from './Portfolio.module.css';
import ProjectFrame from '../../components/ProjectFrame/ProjectFrame';

const Portfolio = (props) => {
    const projectsList = [
        {
            name: 'escala',
            img: 'escala.png',
            url: 'https://escalapoland.com/',
        },
        {
            name: 'domino',
            img: 'domino.png',
            url: 'https://domino-9aeb5.firebaseapp.com/',
        },
        {
            name: 'osiedlova',
            img: 'osiedlova.png',
            url: 'http://www.osiedlova.com/',
        },
        {
            name: 'estilo',
            img: 'estilo.png',
            url: 'https://bruinen90.github.io/estilo/',
        },
        {
            name: 'wolove burgers',
            img: 'wolove.png',
            url: 'http://woloveburgers.pl/',

        },
        {
            name: 'czyżyk',
            img: 'czyzyk.png',
            url: 'https://bruinen90.github.io/czyzyk/'
        },
        {
            name: 'kitchen planner',
            img: 'kitchen_planner.png',
            url: 'https://kitchen-planer.firebaseapp.com/',
        },
        {
            name: 'fylo',
            img: 'fylo.png',
            url: 'https://bruinen90.github.io/fylo/',
        },
        {
            name: 'fylo dark',
            img: 'fylo_dark.png',
            url: 'https://bruinen90.github.io/fylo-dark/',
        },
    ];

    const animatedPictureIndex = Math.floor(projectsList.length*Math.random());

    const projectsOutput = projectsList.map((project, index) => {
        return(
            <ProjectFrame
                title = {project.name}
                img = {project.img}
                url = {project.url}
                animated = {animatedPictureIndex === index}
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
