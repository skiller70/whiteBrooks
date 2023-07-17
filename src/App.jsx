import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import {BrowserRouter,} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Parent/>
      </BrowserRouter>
    </>
  )
}

export default App
