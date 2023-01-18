import React from 'react'
import "./footer.styles.css"
import poster from "../../assets/videoposter.png"
import facebook from "../../assets/footericons/facebook.png"
import In from "../../assets/footericons/In.png"
import twtt from "../../assets/footericons/twtt.png"
import ins from "../../assets/footericons/ins.png"

const Footer = () => {
  return (
    <div>
      <div className='footer-section1'>
        <div className='footer-text-section'>
          <h3 className='footer-title'>Sign Up For Environment News & Alerts</h3>
          <p className='footer-subtitle'>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
          <form>
            <input className='footer-input1' type="text" placeholder='Enter your email address' /><br />
            <button type='submit' className='sub-btn1'>Subscribe</button>
          </form>
        </div>
        <div className='video-section'>
          <video width="498.48" height="445.83" poster={poster}>

          </video>
          {/* <div className='palyPause'></div> */}
        </div>
      </div>
      {/* section 2 */}
      <div className='footer-section2'>
        <div className='spacing'>
          <div className='footer-heading'>
            <h3 className="footer-logo">ENVIROMENTAL</h3>
            <ul className='footer-links'>
              <li>Our Cause</li>
              <li>Contact US</li>
              <li>Cases</li>
              <li>Our Benefactors</li>
            </ul>
          </div>
          <div className="social-links">
            <img src={facebook} alt="" />
            <img src={In} alt="" />
            <img src={twtt} alt="" />
            <img src={ins} alt="" />
          </div>
          <div className="input-address">
            <div className="input">
              <h4 className="input-address-title">Join our Cause, Become a Member</h4>
              <form>
                <input className='footer-input1 input2' type="text" placeholder='Enter your email address' />
                <button className='join' type='submit'>JOIN</button>
              </form>
            </div>
            <div className="address">
              <address>
                4517 Washington Ave. Manchester,<br></br>
                Kentucky 39495<br></br>
                (505) 555-0125, (406) 555-0120<br></br>
                binhan628@gmail.com<br></br>
                manhhachkt08@gmail.com<br></br>
              </address>
            </div>
          </div>

          <div>
            <div className="line"></div>
            <div className="terms-condition">
              <p>All rights reserved Elysian Multipurpose Theme</p>
              <div>
                <p className='term'> Terms & Conditions</p>
                <p>Privacy & Cookies</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer