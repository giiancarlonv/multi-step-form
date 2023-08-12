import React from 'react'
import checkmark from '../images/icon-thank-you.svg';
export const Finish = () => {
  return (
    <>
      <section >
        <div className='finish-container'>
          <img src={checkmark} alt="" />
          <div>
            <h1>Thank you!</h1>
            <p>
              Thanks for confirming your subscription! We hope you have fun 
              using our platform. If you ever need support, please feel free 
              to email us at support@loremgaming.com.
            </p>
          </div>
                   
        </div>
      </section>

    </>
  )
}
