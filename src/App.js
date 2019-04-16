import React, { Component } from 'react';
import styles from './App.module.css';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from 'react-localize-redux';

import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import MemorySocks from './containers/MemorySocks/MemorySocks';
import About from './containers/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                { name: 'Polski', code: 'pl'},
                { name: 'English', code: 'en'},
            ],
            options: { renderToStaticMarkup }
        })
        this.state = {
            showMenu: false,
            touchStartPointX: 0,
            touchStartPointY: 0,
            touchMoveX: false,
        };
        this.sectionsRefs = {
            home: React.createRef(),
            about: React.createRef(),
            portfolio: React.createRef(),
            contact: React.createRef(),
        };
    }

    componentDidMount() {
        window.addEventListener('touchstart', this.touchStartHandler);
        window.addEventListener('touchmove', this.touchMoveHandler);
        window.addEventListener('touchend', this.touchEndHandler);
    }

    touchStartHandler = (e) => {
        this.setState({
            touchStartPointX: e.touches[0].clientX,
            touchStartPointY: e.touches[0].clientY}
        )
    }

    touchMoveHandler = (e) => {
        this.setState({
            touchMoveX: e.touches[0].clientX - this.state.touchStartPointX,
            touchMoveY: e.touches[0].clientY - this.state.touchStartPointY,
        });
    }

    touchEndHandler = (e) => {
        if(
            this.state.touchMoveX < -30 &&
            Math.abs(this.state.touchMoveY) < 45 &&
            !this.state.showMenu
        ) {
            this.clickMenuTogglerHandler();
        }
        if(
            this.state.touchMoveX > 30 &&
            Math.abs(this.state.touchMoveY) < 45 &&
            this.state.showMenu) {
            this.clickMenuTogglerHandler();
        }
        this.setState({touchMoveX: 0});
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
                    clickCover = {()=>this.setState({showMenu: false})}
                    menuVisible = {this.state.showMenu}
                    clickLink = {(link)=>this.goToSection(link)}
                />
                <section ref={this.sectionsRefs.home}>
                    <Home
                        menuVisible = {this.state.showMenu}
                    />
                </section>
                <section ref={this.sectionsRefs.about}>
                    <About
                        goToPortfolio={()=>this.goToSection('portfolio')}
                        goToContact={()=>this.goToSection('contact')}
                    />
                </section>
                <section ref={this.sectionsRefs.portfolio}>
                    <Portfolio />
                </section>
                <section ref={this.sectionsRefs.contact}>
                    <Contact />
                </section>
                <Footer
                    clickLink = {(link)=>this.goToSection(link)}
                />
            </div>
        );
    }
}
export default withLocalize(App);
