// SpinningCard.jsx

import React from 'react';
import './SpinningCard.css'; // Import your CSS file

const SpinningCard = () => {
  return (
    <div className="spinning-card">
      <div className="card">
        <div className="card-front">
          <h2>Front Content</h2>
        </div>
        <div className="card-back">
          <h2>Back Content</h2>
        </div>
      </div>
    </div>
  );
};

export default SpinningCard;
