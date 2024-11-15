import React from 'react';

const Feedback = ({ userData }) => {
  return (
    <div className="feedback-container">
      <h3>Your Personalized Feedback</h3>
      <p><strong>Improvement Areas:</strong> {userData.weaknesses}</p>
      <p><strong>Recommended Actions:</strong> {userData.recommended_actions}</p>
    </div>
  );
};

export default Feedback;
