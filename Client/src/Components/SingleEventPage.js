import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';
import { eventEndpoints } from '../services/api';
import { apiConnector } from '../services/apiConnector';
import './SingleEventPage.css';
import { formatDate } from '../services/formatDate';
const SingleEventPage = (category) => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [generalTickets, setGeneralTickets] = useState('');
  const [vipTickets, setVipTickets] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const handleChangeGTicket=(e)=>{
    const minValue = parseInt(e.target.min, 10);
    const maxValue = parseInt(e.target.max, 10);
    let value = parseInt(e.target.value, 10);
    if (value < minValue) {
      value = minValue;
    } else if (value > maxValue) {
      value = minValue;
    }
    setGeneralTickets(value);
  }
  const handleChangeVTicket=(e)=>{
    const minValue = parseInt(e.target.min, 10);
    const maxValue = parseInt(e.target.max, 10);
    let value = parseInt(e.target.value, 10);
    if (value < minValue) {
      value = minValue;
    } else if (value > maxValue) {
      value = minValue;
    }
    setVipTickets(value);
  }
  useEffect(() => {
    async function fetchEventDetails() {
      try {
        const response = await apiConnector("POST", eventEndpoints.GETEVENTDETAILS_API, { id }, null, null, false);
        setEvent(response.data.reqEventDetails);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    }
    fetchEventDetails();
  }, [id, category]);

  useEffect(() => {
    const generalPrice = event ? event.price : 0; // Set general ticket price
    const vipPrice = event ? event.price * 1.5 : 0; // Set VIP ticket price (assuming 1.5x general price)
    setTotalAmount(generalTickets * generalPrice + vipTickets * vipPrice);
  }, [generalTickets, vipTickets, event]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        <p><span>{formatDate(event.date)}</span> | <span><FaLocationDot /></span> <span>{event.location}</span> | <span>Rs.{event.price} onwards</span></p>
        <button className="btn btn-primary" onClick={handleShow}>Book</button>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Tickets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="generalTickets">
              <Form.Label>General Tickets</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10"
                value={generalTickets}
                onChange={handleChangeGTicket}
              />
            </Form.Group>
            <Form.Group controlId="vipTickets" className="mt-3">
              <Form.Label>VIP Tickets</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10"
                value={vipTickets}
                onChange={handleChangeVTicket}
              />
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
          <Button variant="primary">
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleEventPage;
