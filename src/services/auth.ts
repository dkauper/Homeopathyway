import axios from 'axios';

const API_URL = 'https://homeopathyway.com/api/auth'; // Replace with your actual API URL

export const AuthService = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  },

  signup: async (userData: any) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  },
};