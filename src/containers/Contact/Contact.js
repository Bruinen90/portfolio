import React, { Component } from 'react';
import styles from './Contact.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';

class Contact extends Component {
    render() {
        return (
            <div className={styles.container}>
                <ContactForm />
            </div>
        );
    }
}
export default Contact;
