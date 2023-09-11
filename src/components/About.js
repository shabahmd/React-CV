// src/components/About.js

import React, { useState } from 'react';

function About() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        cursus, lorem non aliquet interdum, urna elit blandit libero.
      </p>
      {showDetails && (
        <div>
          <h3>Additional Details</h3>
          <p>Additional information about yourself goes here.</p>
        </div>
      )}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </section>
  );
}

export default About;
