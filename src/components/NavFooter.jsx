import React from 'react'
import mobileBG from '../images/bg-sidebar-mobile.svg';

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className='label-contaner'>
          <div className='number active'>
            1
          </div>
          <div className='text'>
            <label htmlFor="step 1">Step 1</label>
            <h1>Your info</h1>
          </div>
        </div>
        <div className='label-contaner'>
          <div className='number'>
            2
          </div>
          <div className='text'>
            <label htmlFor="step 1">Step 2</label>
            <h1>Select plan</h1>
          </div>
        </div>
        <div className='label-contaner'>
          <div className='number'>3</div>
          <div className='text'>
            <label htmlFor="step 1">Step 3</label>
            <h1>Add-ons</h1>
          </div>
        </div>
        <div className='label-contaner'>
          <div className='number'>4</div>
          <div className='text'>
            <label htmlFor="step 1">Step 4</label>
            <h1>Summary</h1>
          </div>
        </div>
      </nav>
    </>
  )
}

export const Footer =()=>{
  return(
    <>
      <footer>
        <button>Next Step</button>
      </footer>
    </>
  )
}
export const BGImage =()=>{
  return(
    <img src={mobileBG} alt="mobile-bg" className='bg-image' />
  )
}