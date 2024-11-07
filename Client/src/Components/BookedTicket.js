import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './BookedTicket.css';
import photo from '../assets/ANI-20240121194141.jpg';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { apiConnector } from '../services/apiConnector';
import { eventEndpoints } from '../services/api';

const BookedTicket = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [openModalIndex, setOpenModalIndex] = useState(null); // Track which event modal is open
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEventDetails() {
      try {
        const response = await apiConnector("GET", eventEndpoints.GETUSERBOOKEDTICKETS_API, { id }, { Authorization: `Bearer ${token}` }, null, false);
        // console.log("userbooked",response);
        setEvents(response.data.userBookedTickets);
      } catch (error) {
        console.log("Error while fetching booked-ticket details", error);
      }
    }
    fetchEventDetails();
  }, [id, token]);

  const handleShow = (index) => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);
  // if(events.length===0){
  //   return(
  //     <>
  //       You have not Booked Any Tickets yet;
  //     </>
  //   );
  // }
  return (
    <>
      {events && events.map((event, index) => (
        <div className="booked-ticket-container">
          <div className="booked-ticket-card" key={event.id}>
            <div className="img">
              <img src={photo} alt="Event" />
            </div>
            <div className="details">
              <span>{event.title}</span>
              <span>
                <Button variant="dark" onClick={() => handleShow(index)}>
                  View Details
                </Button>
              </span>
            </div>
          </div>

          {/* Modal for displaying detailed information */}
          <Modal show={openModalIndex === index} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{event.title} Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <p>No. of General Tickets Booked: {event.generalTicketsBooked}</p>
              <p>No. of VIP Tickets Booked: {event.vipTicketsBooked}</p>
              <p>Total Price: Rs.{event.totalPrice}</p> */}
              <p>Location: {event.location}</p>
              <p>Artists: {event.artist}</p>
              <p>Date: {event.dateAndTime}</p>
              <p>Category: {event.category}</p>
              <p>Duration: {event.duration} hours</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </>
  );
}

export default BookedTicket;
