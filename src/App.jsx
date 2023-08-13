import { useState } from 'react'
import './App.css'
import { FirstStep } from './components/Step1' 
import { SecondStep} from './components/Step2'
import { ThirdStep } from './components/Step3'
import { FinalStep } from './components/Step4'
import { Finish } from './components/Finish'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BGImage, Navbar } from './components/NavFooter'

function App() {
  const [count, setCount] = useState(0)
  const path = location.pathname;
  return (
    <>
    <BGImage />
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
      <BrowserRouter>
        <Routes>
          <Route path='/multi-step-form' exact element={<FirstStep />}/>
            <Route path='/second-step' exact element={<SecondStep />}/>
              <Route path='/third-step' exact element={<ThirdStep />}/>
                <Route path='/final-step' exact  element={<FinalStep />}/>
                  <Route path='/finish' exact element={<Finish />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
