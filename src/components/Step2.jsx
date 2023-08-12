import React, { Component, useState } from 'react'
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'

export const SecondStep = () => {
  return (
    <>
      <form>
        <section>
          <div className='header'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div>

          </div>
          <div className='plan-container'>
            <button className='plan-wrapper'>
              <img src={arcade} alt="arcade image" />
              <div className='plan-text'>
                <h2>Arcade</h2>
                <p>$9/mo</p>
              </div>
            </button>
            <button className='plan-wrapper'>
              <img src={advanced} alt="arcade image" />
              <div className='plan-text'>
                <h2>Advanced</h2>
                <p>$12/mo</p>
              </div>
            </button>
            <button className='plan-wrapper'>
              <img src={pro} alt="arcade image" />
              <div className='plan-text'>
                <h2>Advanced</h2>
                <p>$15/mo</p>
              </div>
            </button>
          </div>
          <div className='plan-duration'>
            <h3>Monthly</h3>
            <ToggleSwitch />
            <h3>yearly</h3>
          </div>
        </section>
        <div className='next-button back'>
          <button className='back' onClick={()=> history.back()}>Go back</button>
          <button type='submit'>Next Step</button>
        </div>
      </form>
    </>
  )
}

const ToggleSwitch = () =>{
  return(
    <>
    <div>
      <input type="checkbox" id='switch' className='checkbox'/>
      <label htmlFor="switch" className='toggle'></label>
    </div>

    </>
  )
}