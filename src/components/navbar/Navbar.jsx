import React from 'react'
import "./navbar.css"
import logoimg from "../../assets/images/pngwing.com.png"
import { Link } from 'react-router-dom'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({handleColorMode, colorMode}) => {
  return (
    <div className='navbar'>
      <div className="navbar-wrap">
        <div className="logo">
        <Link to='/'><img src={logoimg} alt="" /></Link>
        </div>
        <div className="features">
          <ul>
            <li><a href="#projects">Project</a></li>
            <li><a href="#cv">CV</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button onClick={handleColorMode} className='button-mode'>{colorMode === "dark" ? (<BsFillSunFill size={20}/>) : (<BsFillMoonFill size={20}/>)}</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar