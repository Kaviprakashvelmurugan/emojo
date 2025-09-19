import EmojiGame from './components/EmojiGame'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-angry-face-with-horns-100_tpq3bw.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-loudly-crying-face-100_d5bvll.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-hot-face-100_st6crw.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-lady-beetle-100_wn90bj.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-emoji-100_ylkaju.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-face-holding-back-tears-100_gtb8fy.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-partying-face-100_hzqfi8.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-pile-of-poo-100_wpkpx6.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271101/icons8-smiling-face-with-sunglasses-100_abduvo.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271102/icons8-rolling-on-the-floor-laughing-100_e9b02w.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271102/icons8-star-struck-100_xcz9pk.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://res.cloudinary.com/dysrfxfyv/image/upload/v1758271102/icons8-biting-lip-96_hbpq5q.png',
  },
]

const App = () => <EmojiGame emojisList={emojisList} />

export default App

