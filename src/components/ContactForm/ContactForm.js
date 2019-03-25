import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

import TextInput from './TextInput/TextInput';

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
        const setStyle = (inputName) => {
            if(!this.state.inputs[inputName].validity && this.state.inputs[inputName].changed ) {
                return {borderColor: 'red'}
            }
            else {
                return {}
            }
        }

        let sendButtonValue = this.state.sent ? 'Wysłano' : 'Wyślij';
        if(this.state.error) {
            sendButtonValue = 'Błąd'
        }

        const sendButtonClasslist = [styles.button];
        if(this.state.error) { sendButtonClasslist.push(styles.error)}
        if(this.state.sent) { sendButtonClasslist.push(styles.sent)}

        const textInputs = [
            {
                type: "text",
                placeholder: "imię i nazwisko / firma",
                label: "name",
            },
            {
                type: "email",
                placeholder: "email",
                label: "email",
            },
            {
                type: "text",
                placeholder: "temat",
                label: "topic",
            },
            {
                type: "textarea",
                placeholder: "treść",
                label: "content",
            },
        ];

        const inputOutput = textInputs.map((params, index) => {
            return (
                <TextInput
                    key={params.label}
                    type={params.type}
                    placeholder={params.placeholder}
                    inputName={params.label}
                    handleChange={(e) => this.inputChangeHandler(e, params.label)}
                    changed={this.state.inputs[params.label].changed}
                    valid={this.state.inputs[params.label].validity}
                    value={this.state[params.label]}
                />
            )
        })
        return (
            <form className={styles.form}>
                {inputOutput}
                <input
                    type="submit"
                    className={sendButtonClasslist.join(' ')}
                    value={sendButtonValue}
                    onClick={(e) => this.submitHandler(e)}
                    disabled={!this.state.formValid}
                />
            </form>
        );
    }
}
export default ContactForm;
