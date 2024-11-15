import React from 'react';

const PerformanceDashboard = ({ userData }) => {
  return (
    <div className="performance-dashboard">
      <h3>Performance Dashboard</h3>
      <p><strong>Strengths:</strong> {userData.strengths}</p>
      <p><strong>Weaknesses:</strong> {userData.weaknesses}</p>
      <p><strong>Suggested Content:</strong> {userData.suggested_content}</p>
      <p><strong>Predicted Score:</strong> {userData.predicted_score}</p>
    </div>
  );
};

export default PerformanceDashboard;
