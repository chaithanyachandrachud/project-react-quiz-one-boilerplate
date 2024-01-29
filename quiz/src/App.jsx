import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "../src/components/Home"
import Quiz from './components/Page1'
import Result from './components/Final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Quiz/>
      <Result/>
    </>
  )
}

export default App