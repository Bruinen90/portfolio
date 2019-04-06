import React from 'react';
import styles from './ProjectFrame.module.css';
import visitIcon from '../../img/icons/visit.svg';
import detailsIcon from '../../img/icons/details.svg';

import FullInfo from './FullInfo/FullInfo';

class ProjectFrame extends React.Component {
    constructor(props) {
        super(props)
        this.frameRef = React.createRef();

        this.state = {
            zoomed: false,
        }
    }

    // componentDidMount() {
    //     const hang = () => {
    //         if(this.frameRef.current.getBoundingClientRect().top < window.innerHeight && this.props.animated) {
    //             this.frameRef.current.classList.add(styles.pictureAnimated)
    //         }
    //     }
    //     hang()
    //     document.addEventListener('scroll', hang);
    // }
    showDetails = () => {
        this.setState({zoomed: !this.state.zoomed});
        document.body.classList.toggle('noScroll');
    }
    render() {
        const projectImg = require(`../../img/portfolio/${this.props.img}`);
        const projectLogo = require('../../img/portfolio/logos/osiedlova.svg')
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
                                <img src={visitIcon} alt="" className={styles.icon}/>
                            </a>
                            <div
                                onClick={()=>this.showDetails()}
                            >
                                <img src={detailsIcon} alt="" className={styles.icon}/>
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
                            fullImgUrl = {this.props.img}
                            title = {this.props.title}
                            techs = {this.props.techs}
                        />
            </div>
        );
    }
};

export default ProjectFrame;
