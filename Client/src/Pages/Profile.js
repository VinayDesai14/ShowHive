import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Card from 'react-bootstrap/Card';
import 'react-datepicker/dist/react-datepicker.css';
import './Profile.css';
import { profileEndpoints } from '../services/api';
import { apiConnector } from '../services/apiConnector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/profileSlice';
const Profile = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [isUpdated, setIsUpdated] = useState(false); // Track if any field is updated
  const { token } = useSelector((state) => state.auth);
  let { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setIsUpdated(true); // Mark as updated
      };
      reader.readAsDataURL(file);
    }
  };
  // useEffect(async ()=>{
  //   try {
  //     const id=user._id
  //     const response=await apiConnector("POST",profileEndpoints.GET_USER_DETAILS_API,{id}, {
  //       "Content-Type": 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     });
  //     console.log('response user details-> ',response.data.userDetails)
  //     dispatch(setUser(response.data.userDetails));
  //   } catch (error) {
      
  //   }
  // },[])
  // Update state and mark as updated
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setIsUpdated(true);
  };
  useEffect(()=>{

  },[])
  // Save data to the backend
  const handleSave = async () => {
    const id=user._id
    const data = {
      firstName,
      lastName,
      birthDate,
      gender,
      maritalStatus,
      imageSrc,
      id
    };

    try {
      const response=await apiConnector("PUT", profileEndpoints.UPDATE_PROFILE_API, JSON.stringify(data), {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${token}`,
      }, null, false);
      // const response = await fetch('YOUR_BACKEND_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      setIsUpdated(false); // Reset the update status
        console.log('response data ',response.data);
        
        setBirthDate(null);
        setImageSrc(null);
        setFirstName('');
        setLastName('');
        setMaritalStatus('');
        setGender('');
      // if (response.ok) {
      //   // Handle successful save
      //   console.log('Data saved successfully');
        
      // } else {
      //   // Handle save error
      //   console.error('Error saving data');
      // }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="profileCont">
      <div className="accDetails">
        <div className="profileSec">
          <Card className="profileCard">
            <Card.Body>
              <label htmlFor="upload-input" className="upload-btn">
                <Card.Img
                  className="profileImage"
                  variant="top"
                  src={imageSrc || user.image || 'https://via.placeholder.com/150'}
                  alt="User Photo"
                />
                <input
                  type="file"
                  id="upload-input"
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </Card.Body>
          </Card>
          <div>
          <h1>
  Hi,{' '}
  {user.firstName || user.lastName
    ? `${user.firstName || ''} ${user.lastName || ''}`.trim()
    : 'Guest'}
</h1>
</div>
          <h4>Welcome to ShowHive!</h4>
        </div>
        <p>Email Address: {user.email}</p>
      </div>
      <div className="eventDetails">
        <h3>Personal Details</h3>
        <div className="eventInput">
          <label>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleInputChange(setFirstName)}
            placeholder="Enter your First Name"
          />
        </div>
        <div className="eventInput">
          <label>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleInputChange(setLastName)}
            placeholder="Enter your Last Name"
          />
        </div>
        <div className="eventInput">
          <label>BirthDate:</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => {
              setBirthDate(date);
              setIsUpdated(true);
            }}
            onFocus={(e) => e.target.blur()}
            placeholderText="Select a date"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            autoComplete="off"
          />
        </div>
        <div className="eventInput">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={() => {
              setGender('Male');
              setIsUpdated(true);
            }}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={() => {
              setGender('Female');
              setIsUpdated(true);
            }}
          />
          Female
        </div>
        <div className="eventInput">
          <label>Marital Status:</label>
          <input
            type="radio"
            name="maritalstatus"
            value="yes"
            checked={maritalStatus === 'yes'}
            onChange={() => {
              setMaritalStatus('yes');
              setIsUpdated(true);
            }}
          />
          Yes
          <input
            type="radio"
            name="maritalstatus"
            value="no"
            checked={maritalStatus === 'no'}
            onChange={() => {
              setMaritalStatus('no');
              setIsUpdated(true);
            }}
          />
          No
        </div>
        {isUpdated && (
          <div className='saveDiv'>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Profile;
