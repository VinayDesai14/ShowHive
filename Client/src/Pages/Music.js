import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import '../Components/EventDetails.css';
import { eventEndpoints } from '../services/api';
import axios from 'axios';
import { Music } from '../Components/CategoriesList';

const MusicDetail = () => {
  const [musics, setMusic] = useState([]);
  const [selectedType, setSelectedType] = useState(null); // To track selected music type

  useEffect(() => {
    // Function to fetch events based on category
    async function fetchEvents(type) {
      try {
        let response;
        if (type) {
          // Fetch events based on selected category
          response = await axios.get(`${eventEndpoints.GETALLMUSIC_API}?type=${type}`);
        } else {
          // Fetch all events by default
          response = await axios.get(eventEndpoints.GETALLMUSIC_API);
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
  
        setMusic(validEvents); // Update state with filtered events
        //console.log("validEvents" , events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
  
    fetchEvents(selectedType); // Call fetch with the selected category
  }, [selectedType]); // Re-fetch when category changes

  // Handler to update the selected music type
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <Categories categories={Music} handleTypeChange={handleTypeChange} /> {/* Pass handler for category change */}
      <Container className='eventContainer'>
        <Row>
          {musics && musics.map((music, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <Card 
                id={music._id}
                title={music.title}
                Img={music.imageUrl}
                Location={music.location}
                generalSeatPrice={music.generalSeatPrice}
                category="music"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MusicDetail;
