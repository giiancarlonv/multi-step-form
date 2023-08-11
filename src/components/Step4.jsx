import React from 'react'

export const FinalStep = () => {
  return (
    <>
      <form>
        <section> 
          <div className='header'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </div>
          <div className='subcription-container'>
            <div className='subs-header'>
              <div className='text'>
                <h2>Arcade (Monthly)</h2>
                <a href="#">change</a>
              </div>
              <p>$90/yr</p>
            </div>
            <div className='subs-detail'>
              <div className='text'>
                <h3>Online service</h3>
                <p>$90/yr</p>
              </div>
              <div className='text'>
                <h3>Larger storage</h3>
                <p>$90/yr</p>
              </div>
            </div>
          </div>
          <div className='total-wrapper'>
            <h3> Total (per year)</h3>
            <p>$120/yr</p>
          </div>
        </section>
        <div className='next-button done'>
          <button className='back' onClick={()=> history.back()}>Go back</button>
          <button type='submit'>confirm</button>
        </div>
      </form>
    </>
  )
}
