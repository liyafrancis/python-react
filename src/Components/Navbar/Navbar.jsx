import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state between true and false
  };
  return (
    
      <div className="container">
        <div>
          <ul  className='pro'> 
            <li>greenink.pro</li>
          </ul>
        </div>
        <div className='img'>
        <button onClick={toggleMenu} className='menu-toggle'>
          <img src={isOpen ? process.env.PUBLIC_URL + '/c.png' : process.env.PUBLIC_URL + '/m.png'} alt="Logo"/> 
      
        </button>
        
        </div>
        <div className="right">
          <ul  className='pr'>
            <li>Home</li>
          </ul>
          <ul  className='pr'>
            <li>Courses</li>
          </ul>
          <ul className='pr'>
            <li>Services</li>
          </ul>
          <ul className='pr'>
            <li>Company</li>
          </ul>
          <ul className='pr'>
            <li>Contact</li>
          </ul>
        </div>

        {isOpen && (

          <div className='modal'> 
            <button className="close-modal" onClick={toggleMenu}>
          <img
            src={isOpen ? process.env.PUBLIC_URL + '/c.png' : process.env.PUBLIC_URL + '/m.png'}
            alt="Menu Toggle"
          /> 
          </button>
        <div className="right1">
      
          <ul  className='pr'>
            <li>Home</li>
          </ul>
          <ul  className='pr'>
            <li>Courses</li>
          </ul>
          <ul className='pr'>
            <li>Services</li>
          </ul>
          <ul className='pr'>
            <li>Company</li>
          </ul>
          <ul className='pr'>
            <li>Contact</li>
          </ul>
       
        </div>
        
        </div>
          )}
      </div>
      
      
    
  );
};

export default Navbar;
