//import React from 'react';
import '../styles/home.css';
import video from '../Components/Audio And Video/1920.mp4'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <video src={video} muted autoPlay type="video/mp4"></video>
      <h1 className="welcome-message">Welcome!</h1>
      <div className="info-messages">
        <p className="info-message">
          GROW TRADE NET YOUR AGRICULTURE HUB
        </p>
      </div>
    </div>

  );
};

export default HomePage;
