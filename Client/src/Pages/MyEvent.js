import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BookedTicket from '../Components/BookedTicket';
import MySalesTicket from '../Components/MySalesTicket';
const MyEvent = () => {
  return (
    <Tabs
    defaultActiveKey="booked tickets"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="booked tickets" title="Booked Tickets">
      <BookedTicket/>
    </Tab>
    <Tab eventKey="sales" title="My Sales">
      <MySalesTicket/>
    </Tab>
  </Tabs>
  )
}

export default MyEvent;