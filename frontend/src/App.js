import React, { useState } from 'react';
import './App.css';
import Chatbot from './components/Chatbot';
import PerformanceDashboard from './components/PerformanceDashboard';
import Feedback from './components/Feedback';
import Login from './components/Login';

function App() {
  const [userData, setUserData] = useState(null);
  const [chatState, setChatState] = useState('waiting'); // waiting, answered
  const [loading, setLoading] = useState(false); // Track loading state

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      // Simulate API call for login
      // You can replace this with a real API request
      setTimeout(() => {
        setUserData(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>-- PRODIGY --</h1>
      {loading ? (
        <div className="loading-container">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          {userData ? (
            <div className="dashboard-container">
              <PerformanceDashboard userData={userData} />
              <Feedback userData={userData} />
            </div>
          ) : (
            <Login setUserData={handleLogin} />
          )}
          
          <Chatbot setUserData={setUserData} setChatState={setChatState} />
        </>
      )}
    </div>
  );
}

export default App;
