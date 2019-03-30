import React, { Component } from 'react';
import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import MemorySocks from './containers/MemorySocks/MemorySocks';
import About from './containers/About/About';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
        this.sectionsRefs = {
            home: React.createRef(),
            about: React.createRef(),
            portfolio: React.createRef(),
            contact: React.createRef(),
        };
    }

    clickMenuTogglerHandler = () => {
        this.setState({showMenu: !this.state.showMenu})
    }

    goToSection = (sectionName) => {
        this.sectionsRefs[sectionName].current.scrollIntoView({behavior: 'smooth'});
        this.setState({showMenu: false})
    }

    render() {
        return (
            <div className={styles.container}>
                <Nav
                    clickToggler = {()=>this.clickMenuTogglerHandler()}
                    menuVisible = {this.state.showMenu}
                    clickLink = {(link)=>this.goToSection(link)}
                />
                <section ref={this.sectionsRefs.home}>
                    <Home
                        menuVisible = {this.state.showMenu}
                    />
                </section>
                <section ref={this.sectionsRefs.about}>
                    <About />
                </section>
                <section ref={this.sectionsRefs.portfolio}>
                    <Portfolio />
                </section>
                <section ref={this.sectionsRefs.contact}>
                    <Contact />
                </section>
            </div>
        );
    }
}
export default App;
