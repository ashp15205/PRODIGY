import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = ({ setUserData, setChatState }) => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserInput = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/chat', { message: userInput });
      setUserData(response.data);
      setChatState('answered');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <h3>JARVIS</h3>
      <textarea 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        placeholder="Type your question here..."
        disabled={loading} 
      />
      <button onClick={handleUserInput} disabled={loading}>
        {loading ? 'Processing...' : 'Send'}
      </button>
    </div>
  );
};

export default Chatbot;
