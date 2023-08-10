import React, { Component, useState } from 'react'
import { Navbar, Footer, BGImage } from './NavFooter'
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'
import ReactSwitch from 'react-switch';
export const SecondStep = () => {
  return (
    <>
      <BGImage />
      <main>
        <Navbar />
        <section className='second-step'>
          <div className='header'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <button className='plan-wrapper'>
            <img src={arcade} alt="arcade image" />
            <div>
              <h2>Arcade</h2>
              <p>$9/mo</p>
            </div>
          </button>
          <button className='plan-wrapper'>
            <img src={advanced} alt="arcade image" />
            <div>
              <h2>Advanced</h2>
              <p>$12/mo</p>
            </div>
          </button>
          <button className='plan-wrapper'>
            <img src={pro} alt="arcade image" />
            <div>
              <h2>Advanced</h2>
              <p>$15/mo</p>
            </div>
          </button>
          <div className='plan-duration'>
            <h3>Monthly</h3>
            <ToggleSwitch />
            <h3>yearly</h3>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

const ToggleSwitch = () =>{
  return(
    <>
    <div className='toggle-switch'>
      <input type='checkbox' id='switch'/>
      <label htmlFor="switch"></label>
    </div>

    </>
  )
}