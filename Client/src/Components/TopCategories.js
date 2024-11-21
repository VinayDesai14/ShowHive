import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Img from '../assets/ANI-20240121194141.jpg';
import StandUpComedy from '../assets/standUpComedy.png';
import Cricket from '../assets/Cricket.png';
import Music from '../assets/Music.png';
import Gaming from '../assets/Gaming.png';
import './TopCategories.css';
const TopCategories = () => {
  return (
    <Container className="eventContainer-topCategories">
        <Row>
        <h2>Top Categories</h2>
            <Col lg={3} md={4} sm={6}>
                <div>
                <Card>
                    <a href="/events"><Card.Img variant="top" src={StandUpComedy} /></a>
                </Card>
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div>
                <Card>
                    <a href="/sports"> <Card.Img variant="top" src={Cricket} /></a>
                </Card>
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div>
                <Card>
                    <a href="/music"> <Card.Img variant="top" src={Music} /></a>
                </Card>
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div>
                <Card>
                    <a href="/sports"> <Card.Img variant="top" src={Gaming} /></a>
                </Card>
                </div>
            </Col>
        </Row>
      </Container>
  )
}

export default TopCategories;