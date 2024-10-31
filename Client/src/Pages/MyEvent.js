import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const MyEvent = () => {
  return (
    <Tabs
    defaultActiveKey="Booked Tickets"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="booked tickets" title="Booked Tickets">
      Tab content for Home
    </Tab>
    <Tab eventKey="sales" title="My Sales">
      Tab content for Profile
    </Tab>
  </Tabs>
  )
}

export default MyEvent;