import React from 'react';
import styles from './ProjectFrame.module.css';
import linkIcon from '../../img/icons/link.svg';
import zoomIcon from '../../img/icons/zoom.svg';

import FullInfo from './FullInfo/FullInfo';

class ProjectFrame extends React.Component {
    constructor(props) {
        super(props)
        this.frameRef = React.createRef();

        this.state = {
            zoomed: false,
        }
    }

    componentDidMount() {
        const hang = () => {
            if(this.frameRef.current.getBoundingClientRect().top < window.innerHeight && this.props.animated) {
                this.frameRef.current.classList.add(styles.pictureAnimated)
            }
        }
        hang()
        document.addEventListener('scroll', hang);
    }
    render() {
        return(
            <section className={styles.container}>
                <div className={styles.picture} ref={this.frameRef}>
                    <div className={styles.mount}></div>
                    <div className={styles.rope}></div>
                    <div className={styles.frame}
                    >
                        <img
                            src={require(`../../img/portfolio/${this.props.img}`)}
                            alt={this.props.title}
                            className={styles.screen}
                        />
                        <div className={styles.hoverCont}>
                            <a
                                href={this.props.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                            >
                                <img src={linkIcon} alt="" className={styles.icon}/>
                                <div>
                                    Odwiedź stronę
                                </div>
                            </a>
                            <div
                                className={styles.button}
                                onClick={()=>this.setState({zoomed: true})}
                            >
                                <img src={zoomIcon} alt="" className={styles.icon}/>
                                <div>Zobacz szczegóły</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.label}>
                    {this.props.title}
                </div>

                <FullInfo
                    visible = {this.state.zoomed}
                    clickClose = {()=>this.setState({zoomed: false})}
                    fullImgUrl = {this.props.img}
                    title = {this.props.title}
                    techs = {this.props.techs}
                />
            </section>
        );
    }
};

export default ProjectFrame;
