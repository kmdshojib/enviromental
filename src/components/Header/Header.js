import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.styles.css"
import logo from "../../assets/headerImage/Logo.png"
import facebook from "../../assets/headerImage/headfb.png"
import linked from "../../assets/headerImage/headIn.png"
import twitter from "../../assets/headerImage/headtw.png"
import Insta from "../../assets/headerImage/headIns.png"
import fingar from "../../assets/headerImage/finger.png"
import search from "../../assets/headerImage/Search.png"

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <div className='header-section1'>
          <div className="section1-container">
            <div className="spacing head-social-link">
              <NavLink>
                <img src={facebook} alt="alt" />
              </NavLink>
              <NavLink>
                <img src={linked} alt="alt" />
              </NavLink>
              <NavLink>
                <img src={twitter} alt="alt" />
              </NavLink>
              <NavLink>
                <img src={Insta} alt="alt" />
              </NavLink>
            </div>

            <div className='join-casue'>
              <img className='finger' src={fingar} alt="alt" />
              <p className='join-vol'>Join the fight, Become a Volunteer</p>
            </div>
          </div>
        </div>
        <div className='header-section2'>
          <div className="section2-container">
            <div>
              <NavLink className="spacing" to="/">
                <img className='logo' src={logo} alt='logo' />
              </NavLink>
            </div>
            <div className='head-link'>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link">Our Cause</NavLink>
              <NavLink className="nav-link">Contact Us</NavLink>
              <NavLink className="nav-link">Cases</NavLink>
              <NavLink className="nav-link">Our Benefactors</NavLink>
            </div>
            <div className='search'>
              <img className='search-icon' src={search} alt="" />
              <button className="help-fight">Help Us Fight</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header