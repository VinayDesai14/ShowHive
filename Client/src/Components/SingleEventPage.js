import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { eventEndpoints } from '../services/api';  // API endpoints
import { apiConnector } from '../services/apiConnector';
import { formatDate } from '../services/formatDate';
const SingleEventPage = (category) => {
  const { id } = useParams(); // Get event ID from route
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details based on category and ID
    async function fetchEventDetails() {
      try {
        let apiEndpoint;
        let response = await apiConnector("POST", eventEndpoints.GETEVENTDETAILS_API, {
                id,
              },  null, null, false);
              setEvent(response.data.reqEventDetails);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    }
    fetchEventDetails();
  }, [id, category]);

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="single-event-page">
      <h2>{event.title}</h2>
      <img src={event.imageUrl} alt={event.title} className="event-image" />
      <p>Location: {event.location}</p>
      <p>Date: {formatDate(event.date)}</p>
      <p>Price: ${event.price}</p>
      <button className="btn btn-primary">Book Now</button> {/* Booking button */}
    </div>
  );
};

export default SingleEventPage;
