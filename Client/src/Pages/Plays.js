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
    // Function to fetch plays based on selected type/category
    async function fetchPlays(type) {
      try {
        let response;
        if (type) {
          // Fetch plays based on selected type/category
          response = await axios.get(`${eventEndpoints.GETALLPLAYS_API}?type=${type}`);
        } else {
          // Fetch all plays by default
          response = await axios.get(eventEndpoints.GETALLPLAYS_API);
        }
        setPlays(response.data.getAllPlays); // Assuming the response structure is similar
      } catch (error) {
        console.error('Error fetching plays:', error);
      }
    }

    fetchPlays(selectedType); // Fetch plays whenever the selected type changes
  }, [selectedType]); // Re-fetch when the type changes

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
                price={play.price}
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
