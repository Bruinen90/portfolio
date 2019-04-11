import React, { Component } from 'react';
import styles from './NavItems.module.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import data from './NavItems.json';

class NavItems extends Component {
    constructor(props) {
        super(props)
        this.props.addTranslation(data)
    }
    render() {
        const jsonToArr = (json) => {
            const arr = [];
            const keys = Object.keys(json);
            keys.forEach((key) => {
                arr.push({
                    key: key,
                    text: json[key]
                });
            });
            return(arr)
        }
        const menuOutput = jsonToArr(data).map(item => {
            return(
                <li
                    className={styles.menuElement}
                    onClick={()=>this.props.clickLink(item.key)}
                    key={item.key}
                >
                    <div className={styles.menuItem}>
                        <Translate id={item.key} />
                    </div>
                </li>
            )
        })
        return(
            <div className={styles.container}>
                {menuOutput}
            </div>
        );
    }
}
export default withLocalize(NavItems);
