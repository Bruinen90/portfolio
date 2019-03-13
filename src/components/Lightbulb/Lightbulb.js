import React from 'react';
import styles from './Lightbulb.module.css';
import './LightbulbSVG.css';
import bulbImg from '../../img/bulb.svg';
import ReactSVG from 'react-svg';

class Lightbulb extends React.Component {
    shouldComponentUpdate(nextProps) {
        return(this.props.turnedOff !== nextProps.turnedOff)
    }

    componentDidMount() {
        this.loaded = true;
    }
    render() {
        return(
            <div className={[
                styles.bulb,
                styles[this.props.className],
                this.props.turnedOff && styles.bulbOff
            ].join(' ')}>
                <div className={styles.bulb_hanger}></div>
                <ReactSVG
                    src={bulbImg}
                    svgClassName={[
                        'bulb__img',
                        this.props.turnedOff && 'bulb__img--off',
                        this.loaded && 'bulb__img--loaded',
                    ].join(' ')}
                    onClick={this.props.click}
                />
            </div>
        );
    }
};

export default Lightbulb;
