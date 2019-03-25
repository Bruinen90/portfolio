import React, { Component } from 'react';
import styles from './TextInput.module.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTopics: false,
        }
        this.inputsArr = [];
        this.scrollToElement = (index, value) => {
            if(window.innerWidth < 769 && !this.state.showTopics) {
                window.scrollTo({top: this.inputsArr[index].offsetTop + 50, behavior: 'smooth'})
            }
            if(index === 'topic') {
                this.setState({showTopics: true})
            }
        }

        this.changeTopic = (e) => {
            this.props.handleChange(e, 'topic');
            if(e.target.value) {
                this.setState({showTopics: false})
            }
        }
    }
    render() {
        const setStyle = () => {
            if(!this.props.valid && this.props.changed ) {
                return {borderColor: 'red'}
            }
            else {
                return {}
            }
        }

        if(this.props.type === 'textarea') {
            return (
                <textarea
                    className={[styles.input, styles.message].join(' ')}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                    style = {setStyle()}
                    ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                    onFocus={()=>this.scrollToElement(this.props.inputName)}
                    value={this.props.value}
                />
            )
        } else {
            return (
                <input
                    className={styles.input}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                    style = {setStyle()}
                    ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                    onFocus={()=>this.scrollToElement(this.props.inputName)}
                    value={this.props.value}
                />
            )
        }
    }
}
export default TextInput;
