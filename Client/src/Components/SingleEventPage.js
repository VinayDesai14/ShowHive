import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';  // Import icons for increment and decrement
import { FaLocationDot } from "react-icons/fa6";
import { eventEndpoints } from '../services/api';
import { apiConnector } from '../services/apiConnector';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { formatDate } from '../services/formatDate';
import { buyEvent } from '../services/buyEventTicketApi';
import './SingleEventPage.css';

const SingleEventPage = (category) => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [generalTickets, setGeneralTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [generalTicketPrice,setGeneralTicketPrice]=useState(0);
  const [vipTicketPrice,setVipTicketPrice]=useState(0);
  // Handlers for incrementing/decrementing ticket counts
  const incrementGeneralTickets = () => setGeneralTickets((prev) => Math.min(prev + 1, 10));
  const decrementGeneralTickets = () => setGeneralTickets((prev) => Math.max(prev - 1, 0));
  const incrementVipTickets = () => setVipTickets((prev) => Math.min(prev + 1, 10));
  const decrementVipTickets = () => setVipTickets((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    async function fetchEventDetails() {
      try {
        const response = await apiConnector("POST", eventEndpoints.GETEVENTDETAILS_API, { id }, null, null, false);
        setEvent(response.data.reqEventDetails);
        setGeneralTicketPrice(response.data.reqEventDetails.generalSeatPrice);
        setVipTicketPrice(response.data.reqEventDetails.vipSeatPrice);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    }
    fetchEventDetails();
  }, [id, category]);

  useEffect(() => {

    setTotalAmount(generalTickets * generalTicketPrice + vipTickets * vipTicketPrice);
  }, [generalTickets, vipTickets, event]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handlePayment=()=> {
    if (token) {
      buyEvent(token, id, totalAmount,user, navigate, dispatch)
      return
    }
  }
  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="single-event-page">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${event.imageUrl})`
        }}
      >
        <img src={event.imageUrl} alt={event.title} className="event-image" />
      </div>
      <div className='event-detail'>
        <h2>{event.title} by {event.artist}</h2>
        <p> <span>{event.type}</span> | <span>{event.language}</span> | <span>{event.duration} Hours</span></p>
        <p><span>{formatDate(event.dateAndTime)}</span> | <span><FaLocationDot /></span> <span>{event.location}</span> | <span>Rs.{event.generalSeatPrice} onwards</span></p>
        <button className="btn btn-primary" onClick={handleShow}>Book</button>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Tickets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* General Tickets Input with Increment and Decrement */}
            <Form.Group controlId="generalTickets">
              <Form.Label>General Ticket Price : Rs {generalTicketPrice}</Form.Label>
              <div className="ticket-counter">
                <Button variant="outline-secondary" onClick={decrementGeneralTickets}><FaMinus /></Button>
                <span className="ticket-count">{generalTickets}</span>
                <Button variant="outline-secondary" onClick={incrementGeneralTickets}><FaPlus /></Button>
              </div>
            </Form.Group>

            {/* VIP Tickets Input with Increment and Decrement */}
            <Form.Group controlId="vipTickets" className="mt-3">
              <Form.Label>VIP Tickets : Rs {vipTicketPrice}</Form.Label>
              <div className="ticket-counter">
                <Button variant="outline-secondary" onClick={decrementVipTickets}><FaMinus /></Button>
                <span className="ticket-count">{vipTickets}</span>
                <Button variant="outline-secondary" onClick={incrementVipTickets}><FaPlus /></Button>
              </div>
            </Form.Group>
          </Form>
          <div className="mt-3">
            <h5>Total Amount: Rs.{totalAmount}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleEventPage;
