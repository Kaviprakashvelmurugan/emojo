import './index.css'
import {useRef} from 'react'


const EmojiCard = ({emoji, updateScore}) => {
  const cardRef = useRef(null);

  const handleClick = () => {
    updateScore(emoji.id);
    const node = cardRef.current;
    node.classList.remove("animate");
    void node.offsetWidth; 
    node.classList.add("animate");
  };

  return (
    <li ref={cardRef} className="emojiItem animate">
      <button onClick={handleClick}>
        <img src={emoji.emojiUrl} alt={emoji.emojiName} />
      </button>
    </li>
  );
};

export default EmojiCard