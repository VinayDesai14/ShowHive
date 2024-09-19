import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css';
const CardComp = ({Title,Img,Location,Price}) => {
  return (
    <div>
        <Card className='cards'>
        <Card.Img variant="top" src={Img} />
        <Card.Body>
            <Card.Title>Card Title:{Title}</Card.Title>
            <Card.Text>Location:{Location}
                <br/>
                Price:{Price}
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default CardComp;