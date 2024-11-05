import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './BookedTicket.css';
import photo from '../assets/ANI-20240121194141.jpg';

const BookedTicket = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="booked-ticket-container">
      <div className='booked-ticket-card'>
        <div className="img">
          <img src={photo} alt="Event" />
        </div>
        <div className="details">
          <span>Diwali Celebration</span>
          <span>
            <Button variant='dark' onClick={handleShow}>
              View Details
            </Button>
          </span>
        </div>
      </div>

      {/* Modal for displaying detailed information */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Diwali Celebration Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No. of General Tickets Booked: XYZ</p>
          <p>No. of VIP Tickets Booked: XYZ</p>
          <p>Total Price: Rs.100</p>
          <p>Location: ABC Venue</p>
          <p>Artists: XYZ Band</p>
          <p>Date: 2024-11-05</p>
          <p>Category: Music</p>
          <p>Duration: 4 hours</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookedTicket;
