/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Components/Navbar';
import EventDetails from '../Components/EventDetails';
import Profile from './Profile';
import EventDetail from './EventDetail';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <EventDetails/>
        <Profile/>
        <EventDetail/>
    </div>
  )
}

export default Home
