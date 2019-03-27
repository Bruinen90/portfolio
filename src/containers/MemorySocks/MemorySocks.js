import React, { Component } from 'react';
import styles from './MemorySocks.module.css';
import FlipCard from '../../components/FlipCard/FlipCard';
import socksOnDryer from '../../img/socksOnDryer.png';

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
            startTime: 0,
            showWelcomeCont: true,
            level: false,
        }
    }

    clickHandler = (index) => {
        if(!this.state.blocked) {
            if(!this.state.gameStarted) {
                const startTime = new Date()
                this.setState({
                    gameStarted: true,
                    startTime: startTime.getTime(),
                })
            }
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
                this.setState({gameResult: 'win'})
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
        const logoText = 'Crazy socks'.split('').map((letter, index)=> {
            return(
                <span style={{color: randomColor()}} key={index}>{letter}</span>
            )
        })
        //

        let currTime = new Date();
        currTime = currTime.getTime();
        return (
            <div className={styles.container}>
                <div className={[
                    styles.welcomeCont,
                    !this.state.showWelcomeCont && styles.hideWelcomeCont
                ].join(' ')}>
                    <h2 className={styles.title}>
                        {logoText}
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
                            Easy
                        </div>
                        <div
                            className={[
                                styles.levelButton,
                                styles.hardButton
                            ].join(' ')}
                            onClick={()=>this.setLevel('hard')}
                        >
                            Hard
                        </div>
                    </div>
                </div>
                <div className={[
                    styles.game,
                    this.state.level==='hard' && styles.hard
                ].join(' ')}>
                    {cardsOutput}
                    {this.state.attempts}<br />
                    {/* {(currTime - this.state.startTime) / 1000} sekund */}
                </div>
            </div>

        );
    }
}
export default MemorySocks;
