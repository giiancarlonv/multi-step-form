import { useState } from 'react'
import './App.css'
import { FirstStep } from './components/Step1' 
import { SecondStep} from './components/Step2'
import { ThirdStep } from './components/Step3'
import { FinalStep } from './components/Step4'
import { Finish } from './components/Finish'
import { BGImage,Navbar } from './components/NavFooter'
import { Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const path = location.pathname;
  return (
    <>
      <BGImage />
      <main>
        <Navbar />
        <Finish />
      </main>
    </>
  )
}

export default App
