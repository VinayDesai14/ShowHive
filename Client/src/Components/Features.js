import React from 'react'
import Feature from '../assets/Features.png';
import './Features.css';
const Features = () => {
  return (
    <div className='eventContainer'>
        <div className="title">
            <h2>Features</h2>
        </div>
        <div className="main-body">
            <div className="photo">
                <img src={Feature} alt="" />
            </div>
            <div className="txt">
                <ol>
                    <li>Secure Booking</li>
                    <li>Best Prices</li>
                    <li>Flexibility</li>
                    <li>Data Safety</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Features