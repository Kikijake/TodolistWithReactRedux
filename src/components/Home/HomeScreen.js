import React from "react";
import Lottie from 'lottie-react'
import welcomeIcon from '../../assets/animations/welcome_robot.json'
import startButton from '../../assets/animations/start_button.json'

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="homePage-container">
        <div className="welcome-text">Welcome To My ToDo List App</div>
        <Lottie animationData={welcomeIcon} className="welcome-animation" />
        <Lottie animationData={startButton} className="start-button" />
      </div>
    </div>
  );
}

export default HomeScreen