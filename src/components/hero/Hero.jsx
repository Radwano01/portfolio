import "./Hero.css";
import heroimg from "../../assets/images/IMG_1051.jpg";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.smooth-hero');

    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: -200,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%', // Adjust this value for when the animation should start
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);
  return (
    <div className='hero'>
      <div className="hero-image smooth-hero">
        <img src={heroimg} alt=""/>
      </div>
      <div className="hero-welcoming smooth-hero" >
        <h1>Hello To My Portfolio</h1><br />
        <span className='hero-title'>
          That's Website will show My Projects
          , <br />CV and Certificates after checking them
          all <br /> You can Contact with me by sending an Email
        </span>
      </div>
    </div>
  );
}

export default Hero;
