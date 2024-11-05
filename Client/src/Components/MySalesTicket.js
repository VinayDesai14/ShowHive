import React, { useEffect } from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { eventEndpoints } from '../services/api';
import './MySalesTicket.css';
import axios from 'axios';
const MySalesTicket = () => {
    const [open, setOpen] = useState(false);
    const [event,setEvent]=useState([]);
    useEffect(()=>{
      async function fetchEvents() {
        try{
          const response=await axios.get(`${eventEndpoints.GETUSERALLSALES_API}`);
          setEvent(response.data.organiserEvents);
        }catch(error){
            console.log("Error while fetching my sales data: ",error);
        }
      }
      fetchEvents();
    },[])
    return (
      <>
        <div className="my-sales-card">
        <h2>Diwali Celebration</h2>
        <p>Amount Generated: Rs.5000</p>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className='view-detail'
        >
          {open ? "Hide Details" : "View Details"}
        </div>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div className='collapseDetail'>Total Sales of General Tickets:</div>
            <div className='collapseDetail'>General Ticket Price:</div>
            <div className='collapseDetail'>Total Sales of VIP Tickets:</div>
            <div className='collapseDetail'>VIP Ticket Price:</div>
            <div className='collapseDetail'>Location:</div>
            <div className='collapseDetail'>Artists:</div>
            <div className='collapseDetail'>Date:</div>
            <div className='collapseDetail'>Category:</div>
            <div className='collapseDetail'>Duration:</div>
          </div>
        </Collapse>
      </>
    );
}

export default MySalesTicket;