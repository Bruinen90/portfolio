import React, { Component } from 'react';
import styles from './App.module.css';
import Toggler from './components/Nav/Toggler/Toggler';
import Home from './containers/Home/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    clickMenuTogglerHandler = () => {
        this.setState({showMenu: !this.state.showMenu})
    }
    render() {
        return (
            <div className={styles.container}>
                <Toggler
                    click = {()=>this.clickMenuTogglerHandler()}
                    menuVisible = {this.state.showMenu}
                />
                <Home
                    menuVisible = {this.state.showMenu}
                />
            </div>
        );
    }
}
export default App;
