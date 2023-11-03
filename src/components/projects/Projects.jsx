import React, { useEffect } from 'react'
import "./projects.css"
import amazonprojectimg from "../../assets/images/amazon-clone.jpg"
import todosimg from "../../assets/images/todos.png"
import calculatorimg from "../../assets/images/calculator.png"
import shippingimg from "../../assets/images/shippingimg.png"
import furnitureimg from "../../assets/images/furnitureimg.png"
import petcare from "../../assets/images/petcareimg.png"
import loginimg from "../../assets/images/loginimg.png"
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
          <a href="https://radwan-todos.netlify.app" target='_blank' rel="noreferrer"><img src={todosimg} alt="projectimg" /></a>
          <h5>1- Todo-List Website Full-Stack</h5><br />
          <h5>2- You can Add Todos</h5><br />
          <h5>3- You can Check it To make it Done</h5><br />
          <h5>4- You can Remove the Todos</h5><br />
          <h5>5- builded by Redux Toolkit</h5><br />
          <h5>6- You can check The Project code on GitHub <a href="https://github.com/Radwano01/Todos" style={{color: " blue", borderBottom: "1px solid blue"}} target='_blank' rel="noreferrer">Click</a></h5>
          <br /><br /><br />
          
        </div>
        <div className="project-three">
          <a href="https://radwan-calculator.netlify.app" target='_blank' rel="noreferrer"><img src={calculatorimg} alt="projectimg" /></a>
          <h5>1- Simple Calculator</h5><br />
          <h5>2- You can check The Project code on GitHub <a href="https://github.com/Radwano01/calculator" style={{color: " blue", borderBottom: "1px solid blue"}} target='_blank' rel="noreferrer">Click</a></h5>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
      <div className="card-of-projects smooth-projects">
        <div className="project-four">
          <a href="https://radwan-shipping-website.netlify.app" target='_blank' rel='noreferrer'><img src={shippingimg} alt="" /></a>
          <h5>1- Shipping Landing Page</h5><br />
          <h5>2- Responsive for all pages</h5><br />
          <h5>3- You can check The Project code on GitHub <a href="https://github.com/Radwano01/shipping-frontend" style={{color: " blue", borderBottom: "1px solid blue"}} target='_blank' rel="noreferrer">Click</a></h5>
        </div>
        <div className="project-five">
          <a href="https://radwan-furniture-website.netlify.app" target='_blank' rel='noreferrer'><img src={furnitureimg} alt="" /></a>
            <h5>1- Furniture Landing Page</h5><br />
            <h5>2- Responsive for all pages</h5><br />
            <h5>3- You can check The Project code on GitHub <a href="https://github.com/Radwano01/furniture-frontend" style={{color: " blue", borderBottom: "1px solid blue"}} target='_blank' rel="noreferrer">Click</a></h5>
        </div>
        <div className="project-six">
          <a href="https://radwan-petcare-website.netlify.app/" target='_blank' rel='noreferrer'><img src={petcare} alt="" /></a>
            <h5>1- Pet Care Landing Page Design</h5><br />
            <h5>2- Responsive for all pages</h5><br />
            <h5>3- You can check The Project code on GitHub <a href="https://github.com/Radwano01/petcare-frontend" style={{color: " blue", borderBottom: "1px solid blue"}} target='_blank' rel="noreferrer">Click</a></h5>
        </div>
      </div>
      <div className="card-of-projects smooth-projects">
        {/* <div className="project-seven">
          <a href="#/" target='_blank' rel='noreferrer'><img src={loginimg} alt="" /></a>
          <h5>1- Login /Register Page</h5><br />
          <h5>2- You can Register</h5><br />
          <h5>3- Verify the account by send a link</h5><br />
          <h5>4- The password you regisered will be hashed in database</h5><br />
          <h5>5- You can Reset Password</h5>
          <h5>6- You can check The Project code on GitHub <a href="https://github.com/Radwano01/login-Register" style={{color: " blue", borderBottom: "1px solid blue"}} target='_blank' rel="noreferrer">Click</a></h5><br />
          <h5 style={{color: "red"}}>(No Domain available for this project)</h5>
        </div> */}

      </div>
    </div>
  )
}

export default Projects