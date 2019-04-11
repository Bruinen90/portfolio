import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import styles from './LanguageSelector.module.css';

const LanguageSelector = ({ languages, activeLanguage, setActiveLanguage }) => (
    <div className="selector">
        {languages.map(lang => (
            <img
                src={require(`../../img/langs/${lang.code}.svg`)}
                onClick={() => setActiveLanguage(lang.code)}
                key={lang.code}
                className={styles.icon}
            />
        ))}
  </div>
);

export default withLocalize(LanguageSelector);
