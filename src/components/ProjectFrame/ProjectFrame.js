import React from 'react';
import styles from './ProjectFrame.module.css';
import visitIcon from '../../img/icons/visit.svg';
import detailsIcon from '../../img/icons/details.svg';
import ReactSVG from 'react-svg';

import FullInfo from './FullInfo/FullInfo';

class ProjectFrame extends React.Component {
    constructor(props) {
        super(props)
        this.frameRef = React.createRef();

        this.state = {
            zoomed: false,
        }
    }
    showDetails = () => {
        this.setState({zoomed: !this.state.zoomed});
        document.body.classList.toggle('noScroll');
    }
    render() {
        const projectImg = require(`../../img/portfolio/thumbs/${this.props.imgFilename}.jpg`);
        const projectLogo = require(`../../img/portfolio/logos/${this.props.logo}`)
        return(
            <div className={styles.container}>
                <div className={styles.picture} ref={this.frameRef}>
                    <div
                        className={styles.frame}
                        style={{
                            backgroundImage: "url(" + projectImg + ")"
                        }}
                    >
                        <div
                            className={styles.colourOverlay}
                            style={{
                                background: this.props.themeColour
                            }}
                        >
                        </div>
                        <div className={styles.iconsBackground}></div>
                        <div className={styles.iconsCont}>
                            <a
                                href={this.props.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ReactSVG
                                    src={visitIcon}
                                    svgClassName={styles.icon}
                                />
                            </a>
                            <div
                                onClick={()=>this.showDetails()}
                            >
                                <ReactSVG
                                    src={detailsIcon}
                                    svgClassName={styles.icon}
                                />
                            </div>
                        </div>
                        <img
                            src={projectLogo}
                            alt={this.props.title}
                            className={styles.logo}
                        />
                    </div>
                </div>
                <FullInfo
                    visible = {this.state.zoomed}
                    clickClose = {()=>this.showDetails()}
                    title = {this.props.title}
                    imgFilename = {this.props.imgFilename}
                    about = {this.props.about}
                    techs = {this.props.techs}
                    myRole = {this.props.myRole}
                    url = {this.props.url}
                />
            </div>
        );
    }
};

export default ProjectFrame;
