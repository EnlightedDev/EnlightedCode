import React from 'react'

import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    
      <div className="navbar">
            <Link to = "/">
            <span><img className='logo' src="/logo.png" alt="" /></span>
            </Link>
            {/* <div className='button-group'>
              <button className='btn btn-primary'>Login</button>
              <button className='btn btn-primary'>SignUp</button>
            </div> */}
      </div>
    
  )
}

export default Navbar
