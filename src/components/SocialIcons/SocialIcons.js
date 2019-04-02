import React from 'react';
import styles from './SocialIcons.module.css';
import githubIcon from '../../img/social/github.svg';
import codewarsIcon from '../../img/social/codewars.svg';
import stackOverflowIcon from '../../img/social/stack_overflow.svg';

const SocialIcons = (props) => {
    return(
        <div className={styles.container}>
            <a
                href="https://github.com/bruinen90/"
                target="_blank"
                className={styles.socialLink}
                rel="noopener noreferrer"
            >
                <img
                    src={githubIcon}
                    alt="GitHub"
                    title="Moje konto na GitHub"
                    className={styles.socialIcon}
                />
            </a>
            <a
                href="https://www.codewars.com/users/Bruinen"
                target="_blank"
                className={styles.socialLink}
                rel="noopener noreferrer"
            >
                <img
                    src={codewarsIcon}
                    alt="CodeWars"
                    title="Moje konto na CodeWars"
                    className={styles.socialIcon}
                />
            </a>
            <a
                href="https://stackoverflow.com/users/9701988/bruinen"
                target="_blank"
                className={styles.socialLink}
                rel="noopener noreferrer"
            >
                <img
                    src={stackOverflowIcon}
                    alt="Stack Overflow"
                    title="Moje konto na StackOverflow"
                    className={styles.socialIcon}
                />
            </a>
        </div>
    );
};

export default SocialIcons;
