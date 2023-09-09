import { useState } from 'react'
import ImageGallery from './ImageGallery'
import reactLogo from './assets/react.svg'
import birdLogo from './assets/kingfisher1.jpg'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageGallery></ImageGallery>
    </>
  )
}

export default App
