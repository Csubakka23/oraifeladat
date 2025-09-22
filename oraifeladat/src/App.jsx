import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import'./css/style.css'
import Hello from "./Hello.jsx"
import {Flip, Flip2} from "./Flip.jsx"
import "./css/flip.module.css"

function App() {
  return (
    <>
      <h1>Második react app</h1>
      <Hello />
      <Flip/>
      <Flip2/>
    </>
  )
}

export default App
