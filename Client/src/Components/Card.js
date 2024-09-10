import React from 'react'
import Card from 'react-bootstrap/Card';
import GFG from '../Assests/Images/gfg.jpeg';
import './Card.css';
const CardComp = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={GFG} />
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