import React from 'react';
import './SocialIconSVG.css';
import ReactSVG from 'react-svg';

const SocialIcon = (props) => {
    return(
        <a
            href={props.linkTarget}
            target="_blank"
            rel="noopener noreferrer"
        >
            <ReactSVG
                src={props.iconSrc}
                svgClassName={[
                    'socialIcon__icon',
                    props.light && 'socialIcon__icon--light',
                    props.small && 'socialIcon__icon--small',
                ].join(' ')}
                alt={props.name}
                title={props.description}
            />
        </a>
    );
};

export default SocialIcon;
