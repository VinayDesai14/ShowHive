import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import '../Components/EventDetails.css';
import { eventEndpoints } from '../services/api';
import { Sport } from '../Components/CategoriesList';
import axios from 'axios';

const SportsDetail = () => {
  const [sports, setSports] = useState([]);
  const [selectedType, setSelectedType] = useState(null); // To track selected sports type

  useEffect(() => {
    // Function to fetch sports based on selected type/category
    async function fetchSports(type) {
      try {
        let response;
        if (type) {
          // Fetch sports based on selected type/category
          response = await axios.get(`${eventEndpoints.GETALLSPORTS_API}?type=${type}`);
        } else {
          // Fetch all sports by default
          response = await axios.get(eventEndpoints.GETALLSPORTS_API);
        }
        setSports(response.data.getAllEvents); // Assuming response structure is similar
      } catch (error) {
        console.error('Error fetching sports details:', error);
      }
    }

    fetchSports(selectedType); // Fetch sports whenever the selected type changes
  }, [selectedType]); // Re-fetch when the type changes

  // Handler to update the selected sports type
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <Categories categories={Sport} handleTypeChange={handleTypeChange} /> {/* Pass handler for category change */}
      <Container className='eventContainer'>
        <Row>
          {sports && sports.map((sport, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <Card 
                id={sport._id}
                title={sport.title}
                Img={sport.imageUrl}
                Location={sport.location}
                generalSeatPrice={sport.generalSeatPrice}
                category="sports"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SportsDetail;
