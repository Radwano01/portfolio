import React from 'react';
import "./projects.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import travelImage from "../../assets/images/travelImage.png";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();

  const toggleDetails = () => {
    navigate("/project/details");
  };

  return (
    <div className='projects-page' id='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className={`card-of-projects smooth-projects`}>
        <div className="card">
          <img src={travelImage} alt="" />
          <div className="details">
            <div className="title">
              <h4>Travel Management System</h4>
            </div>
            <div className="navigation-button">
              <button onClick={toggleDetails}>More details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
