import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './Components/Appbar/appbar'
import Main from './Components/Layout/Main'
import Intro from './Components/Intro/intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main> 
      <Intro/>
      <Intro/>
    </Main>
      
    </>
  )
}

export default App
