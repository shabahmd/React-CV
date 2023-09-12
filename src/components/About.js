// src/components/About.js

import React, { useState } from 'react';
import './About.css'; // Import the CSS file

function About() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="about"> {/* Apply the "about" class */}
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        cursus, lorem non aliquet interdum, urna elit blandit libero.
      </p>
      <div className={`details ${showDetails ? 'visible' : ''}`}> {/* Apply the "details" class conditionally */}
        <h3>Additional Details</h3>
        <p>Additional information about yourself goes here.</p>
      </div>
      <button className="show-details-button" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </section>
  );
}

export default About;
