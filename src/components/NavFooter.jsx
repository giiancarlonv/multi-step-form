import React from 'react'
import mobileBG from '../images/bg-sidebar-mobile.svg';
import desktopBG from '../images/bg-sidebar-desktop.svg';

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className='mobile-nav'>
            <li className='active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </nav>
        <hgroup className='desktop-nav'>
          <div className='desktop-group'>
            <div className='desktop-number'>1</div>
            <div className='desktop-label'>
              <h5>step 1</h5>
              <h4>your info</h4>
            </div>
          </div>
          <div className='desktop-group'>
            <div className='desktop-number'>2</div>
            <div className='desktop-label'>
              <h5>step 2</h5>
              <h4>select plan</h4>
            </div>
          </div>
          <div className='desktop-group'>
            <div className='desktop-number'>3</div>
            <div className='desktop-label'>
              <h5>step 3</h5>
              <h4>add-ons</h4>
            </div>
          </div>
          <div className='desktop-group'>
            <div className='desktop-number'>4</div>
            <div className='desktop-label'>
              <h5>step 4</h5>
              <h4>summary</h4>
            </div>
          </div>
        </hgroup>
      </header>
    </>
  )
}
export const BGImage =()=>{
  const screenWidth = window.innerWidth;
  return(
    <img src={screenWidth >= 1280 ? desktopBG : mobileBG} alt="mobile-bg" className='bg-image' />
  )
}