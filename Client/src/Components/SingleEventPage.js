import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { eventEndpoints } from '../services/api';  // API endpoints

const SingleEventPage = (category) => {
  const { id } = useParams(); // Get event ID from route
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details based on category and ID
    async function fetchEventDetails() {
      try {
        let apiEndpoint;
        let response;
        switch (category) {
          case 'music':
            apiEndpoint = `${eventEndpoints.GETALLMUSIC_API}/${id}`;
            response = await axios.get(apiEndpoint);
            setEvent(response.data.getAllMusicShows);
            break;
          case 'plays':
            apiEndpoint = `${eventEndpoints.GETALLPLAYS_API}/${id}`;
            response = await axios.get(apiEndpoint);
            setEvent(response.data.getAllPlays);
            break;
          case 'sports':
            apiEndpoint = `${eventEndpoints.GETALLSPORTS_API}/${id}`;
            response = await axios.get(apiEndpoint);
            setEvent(response.data.getAllSports);
            break;
          default:
            apiEndpoint = `${eventEndpoints.GETALLEVENTS_API}/${id}`;
            response = await axios.get(apiEndpoint);
            setEvent(response.data.getAllEvents);
        }
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
      <p>Date: {event.date}</p>
      <p>Price: ${event.price}</p>
      <button className="btn btn-primary">Book Now</button> {/* Booking button */}
    </div>
  );
};

export default SingleEventPage;
