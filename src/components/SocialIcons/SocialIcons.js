import React from 'react';
import styles from './SocialIcons.module.css';
import githubIcon from '../../img/social/github.svg';
import codewarsIcon from '../../img/social/codewars.svg';
import stackOverflowIcon from '../../img/social/stack_overflow.svg';
import SocialIcon from './SocialIcon/SocialIcon';

const SocialIcons = (props) => {
    const socialsList = [
        {
            name: 'GitHub',
            linkTarget: 'https://github.com/bruinen90/',
            iconSrc: githubIcon,
            description: 'GitHub',
        },
        {
            name: 'CodeWars',
            linkTarget: 'https://www.codewars.com/users/Bruinen',
            iconSrc: codewarsIcon,
            description: 'CodeWars',
        },
        {
            name: 'Stack Overflow',
            linkTarget: 'https://stackoverflow.com/users/9701988/bruinen',
            iconSrc: stackOverflowIcon,
            description: 'StackOverflow',
        },
    ];

    const socialOutput = socialsList.map(icon => {
        return(
            <SocialIcon
                name={icon.name}
                linkTarget={icon.linkTarget}
                iconSrc={icon.iconSrc}
                description={icon.description}
                light={props.light}
                small={props.small}
                key={icon.name}
            />
        )
    })
    return(
        <div className={styles.container}>
            {socialOutput}
        </div>
    );
};

export default SocialIcons;
