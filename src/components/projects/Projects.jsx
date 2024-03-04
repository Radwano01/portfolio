import React, { useEffect } from 'react'
import "./projects.css"
import amazonprojectimg from "../../assets/images/amazon-clone.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.smooth-projects');

    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 200,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div className='projects-page' id='projects'>
      <div className="projects-title">
        <h1>Take A Look To My Projects</h1>
      </div>
      <div className="card-of-projects smooth-projects">
        <div className="project-one">
          <a href="https://clone-ddcf5.web.app" target='_blank' rel="noreferrer"><img src={amazonprojectimg} alt="projectimg" /></a>
          <h5>Created an Employee Management System using Java/Spring Boot</h5>
          <h5>for the backend and React for the frontend. Features include</h5>
          <h5>CRUD operations for employees and tasks, admin privileges,</h5>
          <h5>and secure login with JWT authentication.</h5>
          <h5>Github:https://github.com/Radwano01/employee-management-system-backend</h5>
          <h5>Live demo:https://employee-management-system-admin.netlify.app</h5>
        </div>
      </div>
    </div>
  )
}

export default Projects
