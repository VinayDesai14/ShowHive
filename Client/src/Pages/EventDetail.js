import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EventDetail.css';

const EventDetail = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState('');  // State for selected type
  const [selectedCategory, setSelectedCategory] = useState('');  // State for selected category
  const [duration,setDuration]=useState('');
  // const [genTickets,setGenTickets]=useState('');
  // const [vipTickets,setVipTickets]=useState('');
  const handleChangeDuration=(e)=>{
    const minValue = parseInt(e.target.min, 10);
    const maxValue = parseInt(e.target.max, 10);
    let value = parseInt(e.target.value, 10);
    if (value < minValue) {
      value = minValue;
    } else if (value > maxValue) {
      value = minValue;
    }
    setDuration(value);
  }

  // const handleChangeGenTicket=(e)=>{
  //   const minValue = parseInt(e.target.min, 10);
  //   let value = parseInt(e.target.value, 10);
  //   if (value < minValue) {
  //     value = minValue;
  //   }
  //   setGenTickets(value);
  // }

  // const handleChangeVipTicket=(e)=>{
  //   const minValue = parseInt(e.target.min, 10);
  //   let value = parseInt(e.target.value, 10);
  //   if (value < minValue) {
  //     value = minValue;
  //   }
  //   setVipTickets(value);
  // }


  const Categories = [
    "Music",
    "Event",
    "Play",
    "Sport",
  ];

  const Music = [
    "Hip-Hop and Rap",
    "Classical",
    "Bollywood",
    "Pop",
    "Folk",
    "Devotional",
  ];

  const Events = [
    "Comedy Shows",
    "Kids",
    "Meetups",
    "Talks",
    "Screening",
    "Spirituality",
    "Award Shows",
  ];

  const Play = [
    "Theatre",
    "Storytelling",
    "Monologue",
    "Mime",
  ];

  const Sport = [
    "Cricket",
    "Football",
    "Chess",
    "Cycling",
    "Running",
    "E-Sports",
    "Martial Arts",
  ];

  // Get categories based on selected type
  const getCategories = () => {
    switch (selectedType) {
      case 'Music':
        return Music;
      case 'Event':
        return Events;
      case 'Play':
        return Play;
      case 'Sport':
        return Sport;
      default:
        return [];
    }
  };

  return (
    <div className="eventCont">
      <div className='eventDetails'>
        <h2 style={{margin:"1rem"}}>Event Details</h2>

        {/* Event Location */}
        <div className="eventInput">
          <label>Event Location:</label>
          <input type="text" id="location" placeholder="Enter the location" />
        </div>

        {/* Event Title */}
        <div className="eventInput">
          <label>Event Title:</label>
          <input type="text" id="title" placeholder="Enter your event title" />
        </div>

        {/* Ticket Price */}
        <div className="eventInput">
          <label>Ticket Price(General):</label>
          <input type="text" id="price" placeholder="Enter your ticket price(Gen)" />
        </div>

        {/* Ticket Price */}
        <div className="eventInput">
          <label>Ticket Price(VIP):</label>
          <input type="text" id="price" placeholder="Enter your ticket price(VIP)" />
        </div>

        {/* Event Duration */}
        <div className="eventInput">
          <label>Event Duration:</label>
          <input type="number" id="duration" value={duration} placeholder="Enter your event duration" min="1" max="12" onChange={handleChangeDuration}/>
        </div>

        <div className="eventInput">
          <label>Total No. of Tickets(General):</label>
          <input type="number" id="duration" placeholder="Enter your No. of General Tickets (Min:50) " min="50" />
        </div>

        <div className="eventInput">
          <label>Total No. of Tickets(VIP):</label>
          <input type="number" id="duration"  placeholder="Enter your No. of VIP Tickets" min="0"/>
        </div>

        {/* Event Date */}
        <div className="eventInput">
          <label>Event Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            onFocus={(e) => e.target.blur()} // To prevent default focus behavior
            placeholderText="Select an Event date"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            autoComplete="off"
          />
        </div>

        {/* Event Type Dropdown */}
        <div className="eventInput">
          <label>Categories:</label>
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setSelectedCategory('');  // Reset category when type changes
            }}
          >
            <option value="">Select Categories</option>
            {Categories.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Event Category Dropdown */}
        {selectedType && (
          <div className="eventInput">
            <label>Types:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Types</option>
              {getCategories().map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Language */}
        <div className="eventInput">
          <label>Language:</label>
          <input type="text" id="language" placeholder="Enter your event language" />
        </div>

        {/* Artist */}
        <div className="eventInput">
          <label>Artist:</label>
          <input type="text" id="artist" placeholder="Enter the artist name" />
        </div>

        {/* Poster Upload */}
        <div className="eventInput">
          <label>Poster:</label>
          <input type="file" id="upload-input" accept="image/*" />
        </div>
      </div>
    </div>

    
    
  );
};

export default EventDetail;
