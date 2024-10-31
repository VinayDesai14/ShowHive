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
    // Function to fetch music based on selected type/category
    async function fetchMusic(type) {
      try {
        let response;
        if (type) {
          // Fetch music based on selected type/category
          response = await axios.get(`${eventEndpoints.GETALLMUSIC_API}?type=${type}`);
        } else {
          // Fetch all music by default
          response = await axios.get(eventEndpoints.GETALLMUSIC_API);
        }
        //console.log(response.data);
        setMusic(response.data.getAllMusicShows); // Assuming the response structure is the same
      } catch (error) {
        console.error('Error fetching music details:', error);
      }
    }

    fetchMusic(selectedType); // Fetch music whenever the selected type changes
  }, [selectedType]); // Re-fetch when the type changes

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
                genralSeatPrice={music.genralSeatPrice}
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
