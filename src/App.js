import React, { Component } from 'react';
import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';
import MemorySocks from './containers/MemorySocks/MemorySocks';

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
                <Nav
                    clickToggler = {()=>this.clickMenuTogglerHandler()}
                    menuVisible = {this.state.showMenu}
                />
                <Home
                    menuVisible = {this.state.showMenu}
                />
                <Portfolio />
                {/* <MemorySocks /> */}
            </div>
        );
    }
}
export default App;
