import React, { Component } from 'react';
import styles from './MemorySocks.module.css';
import FlipCard from '../../components/FlipCard/FlipCard';
import socksOnDryer from '../../img/socksOnDryer.png';
import helpIcon from '../../img/socks/help.svg';
import restartIcon from '../../img/socks/restart.svg';
import restartIconWhite from '../../img/socks/restart_white.svg';
import Lightbox from '../../components/Lightbox/Lightbox';

class MemorySocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            activeCardIndex: [],
            matchedCardIndex: [],
            blocked: false,
            gameResult: false,
            socksCount: 4,
            attempts: 0,
            gameStarted: false,
            showWelcomeCont: true,
            level: false,
            stars: 0,
        }
    }

    clickHandler = (index) => {
        if(!this.state.blocked) {
            const prevCards = [...this.state.cards];
            prevCards[index].active = true;
            const prevActive = [...this.state.activeCardIndex];
            prevActive.push(index);
            this.setState({
                activeCardIndex: prevActive,
                cards: prevCards,
            })
        }
    }

    setLevel = (level) => {
        let socksCount;
        level === 'easy' ? socksCount = 4 : socksCount = 12;
        this.setState({
            socksCount: socksCount,
            showWelcomeCont: false,
            level: level
        })

        const shuffleArray = (array) => {
            for (let a = array.length - 1; a > 0; a--) {
                const b = Math.floor(Math.random() * (a+1));
                [array[a], array[b]] = [array[b], array[a]];
            }
            return(array)
        }
        const array = [];
        for (let i=0; i<socksCount; i++) {
            array.push({value: i});
            array.push({value: i});
            if(i+1===socksCount) {array.push({value: i+1});}
        }
        this.setState({
            cards: shuffleArray(array)
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.activeCardIndex !== this.state.activeCardIndex) {
            if(this.state.matchedCardIndex.length === this.state.socksCount*2) {
                let levelConst;
                this.state.level === 'hard' ? levelConst = 20 : levelConst = 10;
                const stars = 3 - Math.floor(this.state.attempts / levelConst)
                this.setState({
                    gameResult: 'win',
                    stars: stars,
                })
            }
            const checkCards = (indexA, indexB) => {
                const matchedCardIndex = [...this.state.matchedCardIndex];
                if(this.state.cards[indexA].value === this.state.cards[indexB].value) {
                    matchedCardIndex.push(indexA, indexB);
                }
                this.setState({
                    activeCardIndex: [],
                    matchedCardIndex: matchedCardIndex,
                    blocked: false,
                    attempts: this.state.attempts + 1,
                });
            }
            if(this.state.activeCardIndex.length === 2) {
                this.setState({
                    blocked: true
                })
                setTimeout(
                    ()=>checkCards(
                        this.state.activeCardIndex[0], this.state.activeCardIndex[1])
                , 1000)
            }
        }
    }

    restartGame = () => {
        this.setState({
            cards: [],
            activeCardIndex: [],
            matchedCardIndex: [],
            blocked: false,
            gameResult: false,
            socksCount: 4,
            attempts: 0,
            gameStarted: false,
            showWelcomeCont: true,
            level: false,
        })
    }

    render() {
        const cardsOutput = this.state.cards.map((card, index) => {
            return(
                <FlipCard
                    front='Front'
                    value={card.value}
                    click = {()=>this.clickHandler(index)}
                    active = {this.state.activeCardIndex.includes(index)}
                    matched = {this.state.matchedCardIndex.includes(index)}
                    key={index}
                    hard={this.state.level==='hard'}
                />
            )
        })
        // Generates random colours for letters in game logo
        const randomColor = () => {
            const signs = '0123456789ABCDEF';
            let colour = '#';
            for(let i=0; i<6; i++) {
                colour += signs[Math.floor(Math.random()*16)];
            }
            return(colour);
        }

        const crazyText = (textInput) => {
            const output = textInput.split('').map((letter, index)=> {
                return(
                    <span style={{color: randomColor()}} key={index}>{letter}</span>
                )
            })
            return(output);
        }

        const generateStars = (count) => {
            const output = ['', '', ''];
            return(output.map((star, index)=>{
                return(
                    <img
                        src={require(`../../img/socks/star.svg`)}
                        className={[
                            styles.star,
                            count <= index && styles.emptyStar
                        ].join(' ')}
                        key={index}
                        alt=""
                    />
                )
            }))
        }
        return (
            <Lightbox
                visible={this.props.show}
                clickClose={this.props.hide}
                title='Crazy socks'
            >
                <div className={styles.container}>

                    <div className={[
                        styles.welcomeCont,
                        !this.state.showWelcomeCont && styles.hideWelcomeCont
                    ].join(' ')}>
                        <h2 className={styles.title}>
                            {crazyText('Crazy socks')}
                        </h2>
                        <img
                            src={socksOnDryer}
                            alt="Socks on dryer"
                            className={styles.socksOnDryer}
                        />
                        <div className={styles.levelCont}>
                            <div
                                className={[
                                    styles.levelButton,
                                    styles.easyButton
                                ].join(' ')}
                                onClick={()=>this.setLevel('easy')}
                            >
                                Łatwy
                            </div>
                            <div
                                className={[
                                    styles.levelButton,
                                    styles.hardButton
                                ].join(' ')}
                                onClick={()=>this.setLevel('hard')}
                            >
                                Trudny
                            </div>
                        </div>
                    </div>

                    <div className={styles.game}>
                        <div className={styles.gameControls}>
                            <img
                                src={helpIcon}
                                alt="Pomoc"
                                className={[
                                    styles.controlButton,
                                    styles.controlIcon
                                ].join(' ')}
                                onClick={()=>this.setState({showHelp: true})}
                            />
                            <img
                                src={restartIcon}
                                alt="Zacznij od nowa"
                                className={[
                                    styles.controlButton,
                                    styles.controlIcon
                                ].join(' ')}
                                onClick={()=>this.restartGame()}
                            />
                            <div className={[
                                styles.attemptsCont,
                                styles.controlButton
                            ].join(' ')}>
                                Próby:
                                <span className={styles.attempts}>
                                    {this.state.attempts}
                                </span>
                            </div>
                        </div>
                        <div className={[
                            styles.gameGrid,
                            this.state.level==='hard' && styles.hard
                            ].join(' ')}
                        >
                            {cardsOutput}
                        </div>
                    </div>

                    <div className={[
                        styles.youWonCont,
                        this.state.gameResult==='win' && styles.showYouWonCont,
                    ].join(' ')}>
                        <h2 className={styles.title}>
                            {crazyText('Wygrana, gratulacje!')}
                        </h2>
                        <div className={styles.score}>Potrzebowałeś {this.state.attempts} prób</div>
                        <div className={styles.starsCont}>
                            {generateStars(this.state.stars)}
                        </div>
                        <div
                            className={[
                                styles.controlButton,
                                styles.resetWhenDone
                            ].join(' ')}
                            onClick={()=>this.restartGame()}
                        >
                            <img
                                src={restartIconWhite}
                                alt="Zacznij od nowa"
                                className={styles.controlIcon}
                            />
                            Jeszcze raz?
                        </div>
                    </div>
                </div>
            </Lightbox>
        );
    }
}
export default MemorySocks;
