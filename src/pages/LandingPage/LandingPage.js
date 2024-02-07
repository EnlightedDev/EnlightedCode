import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import {Link} from 'react-router-dom'

import "./landingpage.css"
import Settings from '../../components/Settings/Settings'

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="landing">
      
      {/* <div class="container">
        <div  class="row">
          <div class="col-sm">
            <div className="card1">
              <img src="/profilepic.png" className= "pp" alt="" />
            </div>
          </div>
          <div class="col-sm">
            <div className="card1"></div>
          </div>
          <div class="col-sm">
            <div className="card1"></div>
          </div>
        </div> */}
        <Link to = "/home">
          <button data-aos="fade-right" data-aos-duration="1200" className='btn btn-primary home' >Go to Home</button>
        </Link>
      {/* </div> */}

      <Settings></Settings>
      </div>
    </div>
  )
}

export default LandingPage
