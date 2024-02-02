import React from 'react';
import Editors from '../components/Editors/Editors';
import Navbar from '../components/Navbar/Navbar';

const MainPage = () => {
  return (
    <div className='mainpage'>
      <Navbar></Navbar>
      <Editors></Editors>
    </div>
  );
};

export default MainPage;
