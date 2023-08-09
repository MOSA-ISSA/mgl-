import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="page">
      <div className='profile-backGrooundimage-container'>
          <div className="backGrooundimage"></div> 
      </div>

      <div className="profile-image-container">
        <div className="profile-image"></div>
      </div>
      
      <h1>
        name
      </h1>

      <h4>
          Front-end Developer | UI/UX Designer
      </h4>

    </div>
  );
};

export default Profile;
