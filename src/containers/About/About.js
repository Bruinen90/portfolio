import React, { Component } from 'react';
import styles from './About.module.css';
import TechIcon from '../../components/TechIcon/TechIcon';
import laundryMachine from '../../img/laundry_machine.svg';
import MemorySocks from '../MemorySocks/MemorySocks';
import ProjectFrame from '../../components/ProjectFrame/ProjectFrame';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCrazySocksGame: false
        }
    }
    render() {
        const skillsList = ['html5', 'css3', 'js', 'react', 'rwd'];
        const skillsOutput = skillsList.map((skill, index) => {
            return(
                <TechIcon name={skill} key={index} />
            )
        })
        return (
            <React.Fragment>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.textCont}>
                            <h2 className={styles.header}>O mnie</h2>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit alias possimus aspernatur sunt illum magni, nam minima odio voluptates aperiam, reiciendis repudiandae voluptas at aliquid quidem eum veniam. Ipsa voluptatibus accusantium laudantium dignissimos, ex libero temporibus animi sunt impedit neque similique, reiciendis cupiditate amet ipsam! Ducimus quaerat esse, sed distinctio ipsa facilis nam. Dolor, assumenda porro. Tempore assumenda error qui accusantium, in accusamus quae totam sed, veniam deleniti sapiente quam asperiores cum quod quia rerum ipsa animi eum nostrum veritatis?
                            </div>
                            <h3 className={styles.techHeader}>Umiejętności</h3>
                            <div className={styles.techs}>
                                {skillsOutput}
                            </div>
                        </div>
                        <div className={styles.imagesCont}>
                            {/* <div className={styles.frameCont}>
                                <ProjectFrame
                                    title = 'Crazy socks'
                                    img = 'crazy_socks.png'
                                    animated = {true}
                                    justImage = {true}
                                />
                            </div> */}
                            <img
                                src={laundryMachine}
                                alt="Rozpocznij grę"
                                className={styles.laundryMachine}
                                onClick={()=>this.setState({
                                    showCrazySocksGame: true
                                })}
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
