import React from 'react';
import { withLocalize } from "react-localize-redux";
import styles from './LanguageSelector.module.css';

const LanguageSelector = ({ languages, activeLanguage, setActiveLanguage }) => {
    return(
        <div className={styles.container}>
            {languages.map(lang => (
                <img
                    src={require(`../../img/langs/${lang.code}.svg`)}
                    onClick={() => setActiveLanguage(lang.code)}
                    key={lang.code}
                    className={[
                        styles.icon,
                        activeLanguage.code===lang.code && styles.active,
                    ].join(' ')}
                    title={lang.name}
                    alt={lang.code}
                />
            ))}
      </div>
    )};

export default withLocalize(LanguageSelector);
