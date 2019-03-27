import React, { Component } from 'react';
import styles from './Contact.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import mailbox from '../../img/mail_box.svg';

class Contact extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={mailbox} alt="" className={styles.mailboxImg}/>
                <div className={styles.formCont}>
                    <ContactForm />
                </div>
            </div>
        );
    }
}
export default Contact;
