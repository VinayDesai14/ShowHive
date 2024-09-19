import React , {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import '../Components/EventDetails.css';
import {eventEndpoints} from '../services/api';
import axios from 'axios';
const EventDetails = () => {
    const [musics,setMusic]=useState([]);
  useEffect(()=>{
      async function fetchData(){
          try{
          const response=await axios.get("http://localhost:8000/api/v1/getEvents",{});
          setMusic(response.data.getAllEvents);
          console.log(response.data);
          }catch(error){
            console.error("Error fetching music details:", error);
          }
      }
      fetchData();
  },[]);


  return (
    
    <Container className='eventContainer'>
      <Categories/>
      <Row>
        {musics.map((music,index)=>(
            <Col lg={3} md={4} sm={6} key={index}><Card 
                title={music.title}
                Img={music.ImageUrl}
                Location={music.location}
                price={music.price}
            />
            </Col>
        ))}
      </Row>
    </Container>
    
  )
}

export default EventDetails