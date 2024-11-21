import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import BookedTicket from '../Components/BookedTicket';
import MySalesTicket from '../Components/MySalesTicket';
import './MyEvent.css'
const MyTabs = () => {
  const [activeTab, setActiveTab] = useState("booked tickets");

  const handleSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className='tabCont'>
    <Tabs
      activeKey={activeTab}
      onSelect={handleSelect}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="booked tickets" title="Booked Tickets">
        {activeTab === "booked tickets" && <BookedTicket />}
      </Tab>
      <Tab eventKey="sales" title="My Sales">
        {activeTab === "sales" && <MySalesTicket />}
      </Tab>
    </Tabs>
    </div>
  );
};

export default MyTabs;
