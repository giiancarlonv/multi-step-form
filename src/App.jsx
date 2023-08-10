import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FirstStep } from './components/Step1' 
import { SecondStep} from './components/Step2'
import { ThirdStep } from './components/Step3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThirdStep />
    </>
  )
}

export default App
