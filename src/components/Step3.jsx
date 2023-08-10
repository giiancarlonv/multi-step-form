import React from 'react'
import { Navbar, Footer, BGImage } from './NavFooter'
export const ThirdStep = () => {
  return (
    <>
      <BGImage />
      <main>
        <Navbar />
        <section className='second-step'>
          <div className='header'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className='third-step-wrapper'> 
            <label htmlFor="online-service" className='checkbox-container'>
              <input type="checkbox" id='online-service'/>
              <span className='checkmark'></span>
            </label>
            <div className='text-wrapper'>
              <h2>Online service</h2>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
          </div>

          <div className='third-step-wrapper'> 
              <label htmlFor="larger-storage" className='checkbox-container'>
                <input type="checkbox" id='larger-storage'/>
                <span className='checkmark'></span>
              </label>
            <div className='text-wrapper'>
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$2/mo</p>
          </div>

          <div className='third-step-wrapper'> 
            <label htmlFor="customizable-profile" className='checkbox-container'>
              <input type="checkbox" id='customizable-profile'/>
              <span className='checkmark'></span>
            </label>
            <div className='text-wrapper'>
              <h2>Customizable Profile</h2>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}