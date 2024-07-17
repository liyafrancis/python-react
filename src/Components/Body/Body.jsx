import React from 'react';
import './Body.css'; // Import CSS file for component styling
import Navbar from '../Navbar/Navbar';


const Body = () => {
  return (
    <div className="background-container">
    
     
      <div className="content">
      <Navbar/>
        <h1>PYTHON</h1>
        <h2>Coding is fun</h2>
        <button className='but'>Enroll now</button>
    
    <div className='intro'>
        <div className='cont1'>
        <h3>Classes</h3>
        <h2>Ofline+Online</h2>
        </div>
      
        <hr className='line'/>

        <div className='cont2'>       
          <h3>Duration</h3>
        <h2>90 Days</h2></div>
 
        <hr className='line'/>
        <div className='cont3'>
        <h3>Support</h3>
        <h2>Lifetime</h2>
        
        </div>
     
        </div>
    
     
    </div>
  
   </div> 
  );
};

export default Body;
