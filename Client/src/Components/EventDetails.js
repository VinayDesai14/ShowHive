import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';
import Categories from './Categories';
import './EventDetails.css'
const EventDetails = () => {
  return (
    
    <Container className='eventContainer'>
      <Categories/>
      <Row>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
        <Col lg={3} md={4} sm={6}><Card/></Col>
      </Row>
    </Container>
    
  )
}

export default EventDetails