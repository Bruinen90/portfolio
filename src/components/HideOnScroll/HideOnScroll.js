import React, { Component } from 'react';
import styles from './HideOnScroll.module.css';

class HideOnScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.hide)
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.hide)
    };

    hide = () => {
        this.setState({scrolled: window.pageYOffset > 0})
    }
    render() {
        return (
            <div className={[
                styles.container,
                this.state.scrolled && styles.hidden
            ].join(' ')}>
                {this.props.children}
            </div>
        );
    }
}
export default HideOnScroll;
