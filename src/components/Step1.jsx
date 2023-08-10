import React from 'react'
import { Navbar, Footer, BGImage } from './NavFooter';
export const FirstStep = () => {
  return (
    <>
      <BGImage />
      <main>
        <Navbar />
        <section>
          <div className='header'>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          
          <div className='container'>
            <label htmlFor="name">Name</label>
            <input type="text"name='name' placeholder='e.g Stephen King'/>
          </div>
          <div className='container'>
            <label htmlFor="email">Email Address</label>
            <input type="text"name='email' placeholder='e.g stephenking@lorem.com'/>
          </div>
          <div className='container'>
            <label htmlFor="phone">Phone Number</label>
            <input type="text"name='phone' placeholder='e.g +1 234 567 890'/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
