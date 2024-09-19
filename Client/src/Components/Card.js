import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css';
const CardComp = () => {
  return (
    <div>
        <Card className='cards'>
        <Card.Img variant="top" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Location:
                <br/>
                Price:
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default CardComp;