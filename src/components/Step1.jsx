import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BGImage, Navbar } from './NavFooter';

let tangina = []
export const FirstStep =()=>{
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFromData((prevFormData) =>({...prevFormData, [name]:value}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    tangina.push(formData)
    console.log(tangina);
   
  }
  return (
    <>
    <Outlet />
    <form onSubmit={handleSubmit}>
      <section>
        <div className='header'>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className='container'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' placeholder='e.g Stephen King' id='name' value={formData.name} onChange={handleChange} required/>
        </div>
        <div className='container'>
          <label htmlFor="email">Email Address</label>
          <input type="email"name='email' placeholder='e.g stephenking@lorem.com' id='email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className='container'>
          <label htmlFor="phone">Phone Number</label>
          <input type="text"name='phone' placeholder='e.g +1 234 567 890' id='phone' value={formData.phone} onChange={handleChange} required/>
        </div>   
      </section>   
      <div className='next-button'>
        <button type='submit'><Link to='/second-step'>Next Step</Link></button>
      </div>
    </form>
    </>
  );  
}
