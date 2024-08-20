import React from 'react';
import './Card.css'
import Card from 'react-bootstrap/Card';
import leetcode from '../Assests/Images/leetcode.png'
const CardWebsite = () => {
  return (
    <Card>
      <Card.Img  src={leetcode} alt="Card image" />
    </Card>
  )
}

export default CardWebsite
