import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './Components/Appbar/appbar'
import Main from './Components/Layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main> 
      <h1>hola</h1>
    </Main>
      
    </>
  )
}

export default App
