
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import Navbar from '../Navbar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {

statusParaObj = {
     initial: "✨ Tap an emoji to kick off the challenge!",
     started: "🔥 You're on a roll — keep going!",
     won: "🏆 Victory! You’ve mastered them all!",
     lost: "💔 Oops! Better luck next round — hit Play Again!"
 };

 state = {
    playerId: 0,
    score: 0,
    highScore: 0,
    clickedList: [],
    closeGame: false,
    statusPara:this.statusParaObj.initial
  }
  


  updateScore = clickedId => {
    this.setState(prevState => {
      if (prevState.clickedList.includes(clickedId)) {
        return {
          closeGame: true,
          statusPara:this.statusParaObj.lost,
          highScore: Math.max(prevState.score, prevState.highScore),
          clickedList: [],
        }
      } else {
        let newScore = prevState.score + 1

        if (newScore === 12) {
          return {
            closeGame: true,
            score: newScore,
            highScore:newScore,
            clickedList: [],
            statusPara:this.statusParaObj.won,
          }
        } else {
          const updatedClickedList = [...prevState.clickedList, clickedId]
          return {
            score: newScore,
            clickedList: updatedClickedList,
            closeGame: false,
            statusPara:this.statusParaObj.started,
          }
        }
      }
    })
  }
  playAgain = () => {
    this.setState({closeGame: false, score: 0, clickedList: [],statusPara:this.statusParaObj.initial})
  }
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  render() {
    const {score, highScore, closeGame,statusPara} = this.state

    return (
      <div className="mainBg">
        <div className="navContainer">
          <Navbar scores={{score, highScore, closeGame}} />
          <p className='statusPara'>{statusPara}</p>
        </div>
        <div className="cardsContainer">
          {closeGame === false ?  (
            <ul className="cardsList">
              {this.shuffledEmojisList().map((emoji, index) => (
                         <EmojiCard
                           key={`${emoji.id}-${score}`} 
                           emoji={emoji}
                           updateScore={this.updateScore}
                           />
                        ))}
            </ul>
          ) : closeGame === true && highScore === 12 ? (
            <WinOrLoseCard
              scores={{score, highScore}}
              playAgain={this.playAgain}
            />
          ) : closeGame === true && highScore !== 12 ? (
            <WinOrLoseCard
              scores={{score, highScore}}
              playAgain={this.playAgain}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default EmojiGame
