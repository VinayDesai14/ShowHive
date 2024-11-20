import React, { useState,useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { apiConnector } from '../services/apiConnector';
import { eventEndpoints } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './EventDetail.css';
import { useSelector } from 'react-redux';

const EventDetail = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [duration, setDuration] = useState('');
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);
  const [formFields, setFormFields] = useState({
    location: '',
    title: '',
    generalSeatPrice: '',
    vipSeatPrice: '',
    generalSeats: '',
    vipSeats: '',
    language: '',
    artist: '',
    image: null
  });
  
  const navigate = useNavigate();

  const handleChangeDuration = (e) => {
    let value = Math.min(Math.max(e.target.value, 1), 12);
    setDuration(value);
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)
    if (file) {
      setImageFile(file);
    }
    
  };

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
  
      if (!token) {
        alert("No token found. Please log in again.");
        return;
      }
  
      const formData = new FormData();
      formData.append("location", formFields.location);
      formData.append("title", formFields.title);
      formData.append("generalSeatPrice", formFields.generalSeatPrice);
      formData.append("vipSeatPrice", formFields.vipSeatPrice);
      formData.append("generalSeats", formFields.generalSeats);
      formData.append("vipSeats", formFields.vipSeats);
      formData.append("language", formFields.language);
      formData.append("artist", formFields.artist);
      const formattedDateAndTime = selectedDate.toLocaleDateString('en-GB') + ' ' + selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      formData.append("dateAndTime", formattedDateAndTime);
      formData.append("type", selectedType);
      formData.append("category", selectedCategory);
      formData.append("duration", duration);
      formData.append("image", imageFile);
      formData.append("organiserId", user._id);
      console.log("formdata", formData)
      console.log(formattedDateAndTime);
      // Append image if it exists
      // console.log('image ',formFields.image)
      // if (formFields.image) {
      //   console.log('image ',formFields.image)
      //   formData.append("image", formFields.image);
      // }
  
      const response = await apiConnector("POST", eventEndpoints.CREATEEVENT_API,formData, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
  
      if (response.status === 200) {
        alert("Event created successfully");
        navigate('/');
        // navigate("/your-events-page"); // Replace with your redirect page
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again.");
    }
  };

  const getCategories = () => {
    switch (selectedCategory) {
      case 'Music': return ["Hip-Hop and Rap", "Classical", "Bollywood", "Pop", "Folk", "Devotional"];
      case 'Events': return ["Comedy Shows", "Kids", "Meetups", "Talks", "Screening", "Spirituality", "Award Shows"];
      case 'Plays': return ["Theatre", "Storytelling", "Monologue", "Mime"];
      case 'Sports': return ["Cricket", "Football", "Chess", "Cycling", "Running", "E-Sports", "Martial Arts"];
      default: return [];
    }
  };

  return (
    <div className="eventCont">
      <div className="eventDetails">
        <h2 style={{ margin: "1rem" }}>Event Details</h2>

        <div className="eventInput">
          <label>Event Location:</label>
          <input type="text" id="location" placeholder="Enter the location" value={formFields.location} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Event Title:</label>
          <input type="text" id="title" placeholder="Enter your event title" value={formFields.title} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Ticket Price (General):</label>
          <input type="text" id="generalSeatPrice" placeholder="Enter your ticket price (Gen)" value={formFields.generalSeatPrice} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Ticket Price (VIP):</label>
          <input type="text" id="vipSeatPrice" placeholder="Enter your ticket price (VIP)" value={formFields.vipSeatPrice} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Event Duration:</label>
          <input type="number" id="duration" value={duration} placeholder="Enter your event duration" min="1" max="12" onChange={handleChangeDuration} />
        </div>

        <div className="eventInput">
          <label>Total No. of Tickets (General):</label>
          <input type="number" id="generalSeats" placeholder="Enter your No. of General Tickets (Min:50)" min="50" value={formFields.generalSeats} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Total No. of Tickets (VIP):</label>
          <input type="number" id="vipSeats" placeholder="Enter your No. of VIP Tickets" min="0" value={formFields.vipSeats} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Event Date and Time:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Event Date & Time"
            dateFormat="dd/MM/yyyy h:mm aa"
            showPopperArrow={false}
            autoComplete="off"
            showTimeSelect
            timeFormat="HH:mm"
          />
        </div>

        <div className="eventInput">
          <label>Categories:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Categories</option>
            {["Music", "Events", "Plays", "Sports"].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="eventInput">
            <label>Types:</label>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="">Select Types</option>
              {getCategories().map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        )}

        <div className="eventInput">
          <label>Language:</label>
          <input type="text" id="language" placeholder="Enter your event language" value={formFields.language} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Artist:</label>
          <input type="text" id="artist" placeholder="Enter the artist name" value={formFields.artist} onChange={handleChange} />
        </div>

        <div className="eventInput">
          <label>Poster:</label>
          <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/gif, image/jpeg"
              />
        </div>

        <div className="eventInput" style={{ justifyContent: 'center', alignContent: 'center' }}>
          <button type="submit" className="btn btn-primary" onClick={handleCreate}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;