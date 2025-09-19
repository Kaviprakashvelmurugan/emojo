import './index.css'

const Navbar = ({scores}) => {
   const paraClass =
    scores.closeGame === true ? 'dont-show-scores' : 'show-scores'
    return (
    <div className="nav-box">
      <div className="nav-ele-1">
        <img
          src="https://res.cloudinary.com/dysrfxfyv/image/upload/v1758256475/emojo_logo_mwyk8o.png"
          alt="emoji logo"
        />
      </div>
      <div className="nav-ele-2">
        <p className={paraClass}>Score: {scores.score}</p>
        <p className={paraClass}>Top Score: {scores.highScore}</p>
      </div>
    </div>
  )
}

export default Navbar
