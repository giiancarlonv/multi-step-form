import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BGImage, Navbar } from './NavFooter'
export const ThirdStep = () => {
  return (
    <>
    <form>
      <section>
        <div className='header'>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className='addons-container'> 
          <input type="checkbox" id='online-service'className='checkbox'/>
          <div className='text-wrapper'>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
          </div>
          <p className='price'>+$1/mo</p>
        </div>

        <div className='addons-container'> 
            <input type="checkbox" id='larger-storage' className='checkbox'/>
          <div className='text-wrapper'>
            <h2>Larger storage</h2>
            <p >Extra 1TB of cloud save</p>
          </div>
          <p className='price'>+$2/mo</p>
        </div>

        <div className='addons-container'> 
          <input type="checkbox" id='customizable-profile' className='checkbox'/>
          <div className='text-wrapper'>
            <h2>Customizable Profile</h2>
            <p>Custom theme on your profile</p>
          </div>
          <p className='price'>+$2/mo</p>
        </div>
      </section>
      <div className='next-button back'>
        <button className='back' onClick={()=> history.back()}>Go back</button>
        <button><Link to='/final-step'>Next Step</Link></button>
      </div>
    </form>
    </>
  )
}