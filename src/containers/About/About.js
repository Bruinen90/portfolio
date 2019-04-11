import React, { Component } from 'react';
import styles from './About.module.css';
import TechIcon from '../../components/TechIcon/TechIcon';
import MemorySocks from '../MemorySocks/MemorySocks';
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Header from '../../components/Header/Header';

import mainImg from '../../img/about_main.jpg';
import techs from '../../data/webTechs';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCrazySocksGame: false
        }
    }
    render() {
        const skillsOutput = techs.map((skill, index) => {
            return(
                <div className={styles.iconCont} key={index}>
                    <TechIcon
                        name={skill.name}
                        fullName={skill.fullName}
                        small={true}
                    />
                </div>
            )
        })
        return (
            <React.Fragment>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.textCont}>
                            <Header>O mnie</Header>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit alias possimus aspernatur sunt illum magni, nam minima odio voluptates aperiam, reiciendis repudiandae voluptas at aliquid quidem eum veniam. Ipsa voluptatibus accusantium laudantium dignissimos, ex libero temporibus animi sunt impedit neque similique, reiciendis cupiditate amet ipsam! Ducimus quaerat esse, sed distinctio ipsa facilis nam. Dolor, assumenda porro. Tempore assumenda error qui accusantium, in accusamus quae totam sed, veniam deleniti sapiente quam asperiores cum quod quia rerum ipsa animi eum nostrum veritatis?
                            </div>
                            <div className={styles.buttonsCont}>
                                <Button
                                    justFrame={true}
                                    click={this.props.goToPortfolio}
                                >
                                    Moje realizacje
                                </Button>
                                <Button
                                    click={this.props.goToContact}
                                >
                                    Kontakt
                                </Button>
                                <div className={styles.socialsCont}>
                                    <SocialIcons />
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagesCont}>
                            <div className={styles.techs}>
                                {skillsOutput}
                            </div>
                            {/* <img
                                src={laundryMachine}
                                alt="Rozpocznij grę"
                                className={styles.laundryMachine}
                                onClick={()=>this.setState({
                                    showCrazySocksGame: true
                                })}
                            /> */}
                            <img
                                src={mainImg}
                                alt="Web developer"
                                className={styles.mainImg}
                            />
                        </div>
                    </div>
                </div>
                <MemorySocks
                    show={this.state.showCrazySocksGame}
                    hide={()=>this.setState({showCrazySocksGame: false})}
                />
            </React.Fragment>
        );
    }
}
export default About;
