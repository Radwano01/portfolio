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
          <h5>1- Amazon-Clone Website Full-Stack</h5><br />
          <h5>2- You can Sign in & Sign up</h5><br />
          <h5>3- You can Add products to Basket</h5><br />
          <h5>4- You can pay the Products You Added to Basket</h5><br />
          <h5>5- You can check the Bought Products to Orders <br /> and check the Date...</h5><br />
          <h5>6- You can check The Project code on GitHub <a href="https://github.com/Radwano01/amazon-clone" style={{color: " blue", borderBottom: "1px solid blue"}}target='_blank' rel="noreferrer">Click</a></h5><br />
          <h5 style={{color: "red"}}>(Not: paymant issues isn't work because hosting is free)</h5>
        </div>
        <div className="project-two">
          
        </div>
        <div className="project-three">

        </div>
      </div>
    </div>
  )
}

export default Projects
