import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import '../Components/EventDetails.css';
import { eventEndpoints } from '../services/api';
import { Play } from '../Components/CategoriesList';
import axios from 'axios';

const PlaysDetail = () => {
  const [plays, setPlays] = useState([]);
  const [selectedType, setSelectedType] = useState(null); // To track selected play type

  useEffect(() => {
    // Function to fetch events based on category
    async function fetchEvents(type) {
      try {
        let response;
        if (type) {
          // Fetch events based on selected category
          response = await axios.get(`${eventEndpoints.GETALLPLAYS_API}?type=${type}`);
        } else {
          // Fetch all events by default
          response = await axios.get(eventEndpoints.GETALLPLAYS_API);
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
  
        setPlays(validEvents); // Update state with filtered events
        //console.log("validEvents" , events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
  
    fetchEvents(selectedType); // Call fetch with the selected category
  }, [selectedType]); // Re-fetch when category changes

  // Handler to update the selected play type
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <Categories categories={Play} handleTypeChange={handleTypeChange} /> {/* Pass handler for category change */}
      <Container className='eventContainer'>
        <Row>
          {plays && plays.map((play, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <Card 
                id={play._id}
                title={play.title}
                Img={play.imageUrl}
                Location={play.location}
                generalSeatPrice={play.generalSeatPrice}
                category="plays"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PlaysDetail;
