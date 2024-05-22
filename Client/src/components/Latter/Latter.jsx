import React from 'react'
import './latter.scss'
const Latter = () => {
  return (
  <>
  <div className="lat">
    <div className="container">
        <div className="row">
         <div className="col-lg-6">
            <div className="lat-text">
                <p>Newsletter</p>
                <span>Subscribe to our newsletter and get 20% off your first purchase</span>
            </div>
        </div>   
         <div className="col-lg-6">
            <div className="lat-inp">
               <input type="email" placeholder='Your email'/>
    <button className='btn btn-danger'>Subcribbe</button>
            </div>
        </div>   
        </div>
    </div>
  </div>
  </>
  )
}

export default Latter