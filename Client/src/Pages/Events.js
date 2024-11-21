import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import '../Components/EventDetails.css';
import { eventEndpoints } from '../services/api';
import { Events } from '../Components/CategoriesList';
import axios from 'axios';

const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    // Function to fetch events based on category
    async function fetchEvents(type) {
      try {
        let response;
        if (type) {
          // Fetch events based on selected category
          response = await axios.get(`${eventEndpoints.GETALLEVENTS_API}?type=${type}`);
        } else {
          // Fetch all events by default
          response = await axios.get(eventEndpoints.GETALLEVENTS_API);
        }
  
        // Get current time
        const currentTime = new Date(); // Current time in milliseconds
  
        // Debug current time
        //console.log("Current Timestamp:", currentTime);
  
        // Filter events with valid date and time
        const validEvents = response.data.getAllEvents.filter(event => {
          //console.log("Event Date and Time :" , event.dateAndTime);
          const eventDateTime = new Date(event.dateAndTime); // Event time in milliseconds
          // Debug event time
          //console.log("Event Timestamp:", eventDateTime);
  
          return eventDateTime > currentTime; // Keep only future events
        });
  
        setEvents(validEvents); // Update state with filtered events
        //console.log("validEvents" , events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
  
    fetchEvents(selectedType); // Call fetch with the selected category
  }, [selectedType]); // Re-fetch when category changes
  

  // Handler to update selected category
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <Categories categories={Events} handleTypeChange={handleTypeChange} />
      <Container className="eventContainer">
        <Row>
          {events && events.map((event, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <Card 
                id={event._id}
                title={event.title}
                Img={event.imageUrl}
                Location={event.location}
                generalSeatPrice={event.generalSeatPrice}
                category="events"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default EventDetails;
