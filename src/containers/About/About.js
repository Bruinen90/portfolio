import React, { Component } from 'react';
import styles from './About.module.css';
import TechIcon from '../../components/TechIcon/TechIcon';
import laundryMachine from '../../img/laundry_machine.svg';
import laundry from '../../img/laundry.png';
import MemorySocks from '../MemorySocks/MemorySocks'

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
                    <h2 className="header">O mnie</h2>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit alias possimus aspernatur sunt illum magni, nam minima odio voluptates aperiam, reiciendis repudiandae voluptas at aliquid quidem eum veniam. Ipsa voluptatibus accusantium laudantium dignissimos, ex libero temporibus animi sunt impedit neque similique, reiciendis cupiditate amet ipsam! Ducimus quaerat esse, sed distinctio ipsa facilis nam. Dolor, assumenda porro. Tempore assumenda error qui accusantium, in accusamus quae totam sed, veniam deleniti sapiente quam asperiores cum quod quia rerum ipsa animi eum nostrum veritatis?
                    </div>
                    <h3 className={styles.techHeader}>Umiejętności</h3>
                    <div className={styles.techs}>
                        {skillsOutput}
                    </div>
                    <div className={styles.imagesCont}>
                        <img
                            src={laundry}
                            alt="Brudne pranie"
                            className={styles.laundry}
                        />
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
                <MemorySocks
                    show={this.state.showCrazySocksGame}
                    hide={()=>this.setState({showCrazySocksGame: false})}
                />
            </React.Fragment>
        );
    }
}
export default About;
