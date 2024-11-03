import React from 'react';
import Button from 'react-bootstrap/Button';
import './BookedTicket.css';
import photo from '../assets/ANI-20240121194141.jpg'
const BookedTicket = () => {
  return (
    <div className="booked-ticket-container">
        <div className='booked-ticket-card'>
        <div className="img">
            <img src={photo} alt="" srcset="" />
        </div>
        <div className="details">
            <span>Diwali Celebration</span>
            <span><Button variant='dark'>View Details</Button></span>
        </div>
    </div>
    </div>
  )
}

export default BookedTicket;