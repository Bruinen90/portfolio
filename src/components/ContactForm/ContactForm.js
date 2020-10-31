import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

import TextInput from './TextInput/TextInput';

import data from './ContactForm.json';

const API_PATH = 'https://woloveburgers.pl/api/bruinen/email_form.php';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            topic: this.props.topic || '',
            content: this.props.message || '',
            agreement: false,
            sent: false,
            error: null,
            formValid: false,
            inputs: {
                name: {
                    validity: false,
                    changed: false,
                },
                email: {
                    validity: false,
                    changed: false,
                },
                topic: {
                    validity: false,
                    changed: false,
                },
                content: {
                    validity: false,
                    changed: false,
                }
            }
        }
        this.props.addTranslation(data);
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
                sent: result.data.sent
            })
        })
        .catch(error => this.setState({ error: true }));
    }

    inputChangeHandler = (e, inputName) => {
        const setValidity = (value) => {
            let inputs = this.state.inputs;
            inputs[inputName].validity = value;
            inputs[inputName].changed = true;
            this.setState({inputs: inputs})
        }
        this.setState({[inputName]: e.target.value});
        switch (inputName) {
            case 'name':
                setValidity(e.target.value.length > 0 && e.target.value.length < 100)
                break;
            case 'email':
                setValidity(e.target.value.match(/\S+@\S+\.\S+/gi) !== null)
                break;
            case 'topic':
                setValidity(e.target.value.length > 0 && e.target.value.length < 100);
                break;
            case 'content':
                setValidity(e.target.value.length > 0 && e.target.value.length < 500);
                break;
            default:
                setValidity(false)
        }

        let validity = true;
        for(let inputType in this.state.inputs) {
            if(this.state.inputs.hasOwnProperty(inputType)) {
                if(this.state.inputs[inputType].validity === false) {
                    validity = false;
                }
            }
        }
        this.setState({formValid: validity});
    }

    render() {
        let sendButtonValue = this.state.sent ? 'sent' : 'send';
        if(this.state.error) {
            sendButtonValue = 'error'
        }

        const sendButtonClasslist = [styles.button];
        if(this.state.error) { sendButtonClasslist.push(styles.error)}
        if(this.state.sent) { sendButtonClasslist.push(styles.sent)}

        const inputOutput = Object.entries(data.inputs).map(([name, info]) => {
            // console.log(`inputs.${name}.placeholder`)
            return (
                <Translate key={name}>
                    {({ translate }) =>
                    <TextInput
                        type={info.type}
                        placeholder={translate(`inputs.${name}.placeholder`)}
                        inputName={info.label}
                        index = {name}
                        handleChange={(e) => this.inputChangeHandler(e, name)}
                        changed={this.state.inputs[name].changed}
                        valid={this.state.inputs[name].validity}
                        value={this.state[name]}
                    />
                    }

                </Translate>
            )
        })
        return (
            <form className={styles.form}>
                {inputOutput}
                <Translate>
                    {({ translate }) =>
                        <input
                            type="submit"
                            className={sendButtonClasslist.join(' ')}
                            value={translate(`sendButtonValues.${sendButtonValue}`)}
                            onClick={(e) => this.submitHandler(e)}
                            disabled={!this.state.formValid}
                        />
                    }
                </Translate>
            </form>
        );
    }
}
export default withLocalize(ContactForm);
