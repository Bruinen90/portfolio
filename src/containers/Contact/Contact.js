import React, { Component } from 'react';
import styles from './Contact.module.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import mailbox from '../../img/mail_box.svg';

import data from './Contact.json';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(data);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.headerCont}>
                    <Header
                        inheritFont={true}
                    >
                        <Translate id='contactHeader' />
                    </Header>
                </div>
                <div className={styles.formCont}>
                    <ContactForm />
                </div>
                <img src={mailbox} alt="" className={styles.mailboxImg}/>
            </div>
        );
    }
}
export default withLocalize(Contact);
