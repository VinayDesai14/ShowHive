/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Components/Navbar';
import EventDetails from '../Components/EventDetails';
import Profile from './Profile';
import EventDetail from './EventDetail';
import { useSelector } from "react-redux";
import ProfileDropdown from '../Components/ProfileDropDown';
const Home = () => {
  // const { token } = useSelector((state) => state.auth);
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
