import React, { Component } from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import mailbox from '../../img/mail_box.svg';

class Contact extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.headerCont}>
                    <Header
                        inheritFont={true}
                    >
                        Kontakt
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
export default Contact;
