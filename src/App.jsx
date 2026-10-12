import {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import Splash from './components/Splash/Splash'
import Home from './components/Home/Home'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true) 

  return (
     <AnimatePresence mode="wait">
      {showSplash ? (
        <Splash key="splash" onFinish={() => setShowSplash(false)} />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  )
}

export default App
