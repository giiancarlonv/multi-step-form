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