import React from 'react';
import Editors from '../../components/Editors/Editors';
import Navbar from '../../components/Navbar/Navbar';
import Output from '../../components/Output/output';

import "./mainpage.css"


const MainPage = () => {
  return (
    <div className='mainpage'>
      <Navbar className="nav"></Navbar>
      <div className="main">
        <Editors></Editors>
        
        {/* <Output></Output> */}
      </div>
      
    </div>
  );
};

export default MainPage;
