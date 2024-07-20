import React, { useState } from 'react';
import './Content.css';

const Content = () => {
  const [showPopup, setShowPopup] = useState([false, false, false, false, false]);

  // Function to toggle popup visibility for a specific index
  const togglePopup = (index) => {
    const updatedShowPopup = [...showPopup]; // Create a copy of the showPopup state array
    updatedShowPopup[index] = !updatedShowPopup[index]; // Toggle the popup at the given index
    setShowPopup(updatedShowPopup); // Update the state
  };

  return (
    <div className='cont'>
      <div>
        <p className='text'>
          What will you learn?
        </p>
        <div className='card'>
          <div className='card_container'>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <article key={index} className='card_article'>
                <img src={process.env.PUBLIC_URL + '/python.jpg'} alt='image' className='card_img'></img>
                <div className="card_data">
                  <span className='card_descp'>MODULE {item}</span>
                  <h2 className='card_title'></h2>
                  <button onClick={() => togglePopup(index)} className='card_button'>Read More</button>
                </div>
                {showPopup[index] && (
                  <div className='overlay'>
                    <div className='popup'>
                      <button className='popup-close' onClick={() => togglePopup(index)}>×</button>
                      <div className='popup-content'>
                        <h2 className='popup-heading'>CONTENTS</h2>
                        <ul className='popup-message'>
                          {/* Example content for each popup */}
                          {item === 1 && (
                            <>
                              <li>Python Intro</li>
                              <li>Python Syntax</li>
                              <li>Python Comments</li>
                              <li>Python Variables</li>
                              <li>Python Data Types</li>
                            </>
                          )}
                          {item === 2 && (
                            <>
                              <li>Python Data Types</li>
                              <li>Python Numbers</li>
                              <li>Python Casting</li>
                              <li>Python Strings</li>
                              <li>Python Booleans</li>
                            </>
                          )}
                          {item === 3 && (
                            <>
                              <li>While Loop</li>
                              <li>For Loop</li>
                              <li>if...Else</li>
                            </>
                          )}
                          {item === 4 && (
                            <>
                              <li>Lambda</li>
                              {/* Add more items as needed */}
                            </>
                          )}
                          {item === 5 && (
                            <>
                              <li>Python Classes</li>
                              <li>Python Objects</li>
                              <li>Python Inheritance</li>
                              <li>Python Polymorphism</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
