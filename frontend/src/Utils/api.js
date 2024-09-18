import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

// API to login the user
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

// API to register the user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

// API to get all posts
export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response;
};

// API to get user profile
export const getUser = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response;
};
