import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Card from 'react-bootstrap/Card';
import 'react-datepicker/dist/react-datepicker.css';
import './Profile.css';

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result); // This will update the state with the uploaded image
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className='profileCont'>
      <div className="accDetails">
            <div className='profileSec'>
            <Card className='profileCard'>
              <Card.Body>
                <label htmlFor="upload-input" className="upload-btn">
                <Card.Img  className='profileImage' variant="top" src={imageSrc || 'https://via.placeholder.com/150'} alt="User Photo" />
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
            <p>Welcome to ShowHive!</p>
          </div>
        <h2>Account Details</h2>
        <p>Email Address: </p>
      </div>
      <div className="personalDetails">
        <h3>Personal Details</h3>
        <label>
          First Name:<input type="text" name="firstName" id="firstName" placeholder='Enter your First Name' />
        </label>
        <label>
          Last Name:<input type="text" name="LastName" id="LastName" placeholder='Enter your Last Name' />
        </label>
        <label>
          Birth Date:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            onFocus={(e) => e.target.blur()} // To prevent default focus behavior
            placeholderText="Select a date"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            autoComplete="off"
          />
        </label>
        <label>
          Gender:
          <input type="radio" name="gender" value="male" id="gender" />Male
          <input type="radio" name="gender" value="female" id="gender-f" />Female
        </label>
        <label>
          Marital Status:
          <input type="radio" name="maritalstatus" value="yes" id="maritalStatus" />Yes
          <input type="radio" name="maritalstatus" value="no" id="maritalStatus" />No
        </label>
      </div>
    </div>
  );
}

export default Profile;
