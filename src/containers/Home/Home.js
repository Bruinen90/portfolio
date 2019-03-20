import React, { Component } from 'react';
import styles from './Home.module.css';
import WelcomeLogo from '../../components/WelcomeLogo/WelcomeLogo';
import Lightbulb from '../../components/Lightbulb/Lightbulb';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulbsOff: [true, true, true, true],
            hideShadows: true,
        }
    }

    toggleBulb = (bulbNo) => {
        const newBulbsState = [...this.state.bulbsOff];
        // On mobile we have only 2 bulbs so double effect
        if(window.innerWidth < 769) {
            newBulbsState[bulbNo+1] = !newBulbsState[bulbNo+1];
        }
        newBulbsState[bulbNo] = !newBulbsState[bulbNo];
        this.setState({bulbsOff: newBulbsState})
    }

    componentDidMount() {
        const hideShadows = () => {
            this.setState({bulbsOff: [false, false, false, false], hideShadows: false})
        }
        setTimeout(hideShadows, 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.menuVisible !== this.props.menuVisible) {
            const bulbsStatus = this.props.menuVisible
            this.setState({bulbsOff: [bulbsStatus, bulbsStatus, bulbsStatus, bulbsStatus]})
        }
    }

    render() {
        const lightBulbsParams = [
            {
                className: 'bulb-left',
                delayInMs: 500,
            },
            {
                className: 'bulb-center-left',
                delayInMs: 500,
            },
            {
                className: 'bulb-center-right',
                delayInMs: 500,
            },
            {
                className: 'bulb-right',
                delayInMs: 500,
            },
        ];

        const fullHeightMobile = {
            height: window.innerHeight + 'px',
        }
        const lightBulbsOutput = lightBulbsParams.map((bulb, index) => {
            return (
                <Lightbulb
                    className = {bulb.className}
                    delay = {bulb.delay}
                    index = {index}
                    key = {index}
                    click={()=>this.toggleBulb(index)}
                    turnedOff = {this.state.bulbsOff[index]}
                />
            )
        })
        return (
            <div
                className={[
                    styles.container,
                    styles['bgLightness'+this.state.bulbsOff.filter((a) => !a).length]
                ].join(' ')}
                style={fullHeightMobile}
            >
                <WelcomeLogo
                    bulbsOff = {this.state.bulbsOff}
                    hideTextShadow = {this.state.hideShadows}
                    lightPower = {this.state.bulbsOff.filter((a) => !a).length}
                />
                {lightBulbsOutput}
            </div>
        );
    }
}
export default Home;
