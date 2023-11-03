import React, { useEffect, useState } from 'react'
import "./Cv.css"
import cvimg from "../../assets/images/Personal-cv.png"
import CertData from "../../data/CertificatesData"
import pdf from "../../assets/radwanCV.pdf"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cv = () => {


  const certReload = ()=>{
    const timelineItems = document.querySelectorAll('.smooth-cv-cert');

    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%', // Adjust this value for when the animation should start
          toggleActions: 'play none none reverse',
        },
      });
    });
  }



  const [getData, setGetData] = useState([])
  useEffect(()=>{
    setGetData(CertData)
    certReload()
  },[getData])
  return (
    <div className='cv' id='cv'>
      <h1>My CV</h1>
      <img src={cvimg} alt="" />
      <div className="h1">Download Cv</div>
      <a href={pdf} download="Radwan CV.pdf">
        <button className='download-button'>Download</button>
      </a>
      <br />
      <h1>My Certificate's</h1>
      <div className="certificates">
        <div className="certificate-section">
          {getData?.map((data)=>{
            return (
            <div key={data.id} className='smooth-cv-cert'>
              <img src={data.img} alt="" className='cert-img'/>
              <h4>Date: {data.date}</h4>
              <h4>TimeLine: {data.TimeLine}</h4>
              <h4>Grade Achieved: {data.Grade}</h4>
              <h5>{data.verify}</h5>
              <h5>successful completion of <a href={data.link} target='_blank' rel="noreferrer" style={{color:"blue"}}>{data.successfull}</a></h5>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cv