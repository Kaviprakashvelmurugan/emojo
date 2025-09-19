import './index.css'

const WinOrLoseCard = ({scores, playAgain}) => {
  const {score} = scores

  const handleClick = () => {
    playAgain()
  }
  const resultObj =
    score === 12
      ? {
          text: 'Won',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
        }
      : {
          text: 'Lose',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
        }
  return (
    <div className="won">
      <div className="won-box-1">
        <h1 className="gameStatus">You {resultObj.text}</h1>
        <p className="scoreHeading">Best Score</p>
        <p className="scorePara">{score}/12</p>
        <button onClick={handleClick}>Play Again</button>
      </div>
      <div className="won-box-2">
        <img src={resultObj.imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
