import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const sendChatMessage = (message) => {
  return axios.post(`${API_BASE_URL}/chat`, { message });
};

export const loginUser = (username, password) => {
  return axios.post(`${API_BASE_URL}/login`, { username, password });
};
