/* eslint-disable no-unused-vars */
import React from 'react'
import Profile from './Profile';
import EventDetail from './EventDetail';
import { useSelector } from "react-redux";
import ProfileDropdown from '../Components/ProfileDropDown';
const Home = () => {
  // const { token } = useSelector((state) => state.auth);
  return (
    <div>
        <Profile/>
        <EventDetail/>
    </div>
  )
}

export default Home
