import axios from 'axios';

interface SignupData {
  firstName: string;
  lastName: string;
  prefix?: string;
  age?: number | undefined;
  email: string;
  password: string;
  homePhone?: string;
  mobilePhone?: string;
}

// Remove the port number - let Nginx handle it
const getApiUrl = () => {
  const hostname = window.location.hostname;
  
  // For development
  if (hostname === 'localhost' || hostname.match(/^192\.168\./)) {
    return 'https://server.wrapsys.com/api/auth';
  }
  
  // For development tunnels
  if (hostname.includes('devtunnels.ms')) {
    // return 'https://server.wrapsys.com/api/auth';
    return 'https://lpjdjv8p-3000.usw3.devtunnels.ms';
  }
  
  // For production
  return 'https://server.wrapsys.com/api/auth';
};

const API_URL = getApiUrl();

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true,
  // Add timeout and debug info
  timeout: 5000,
  validateStatus: function (status) {
    return status >= 200 && status < 500; // Don't reject if status is in this range
  }
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(function (config) {
  console.log('Request Config:', {
    url: config.url,
    method: config.method,
    headers: config.headers,
    baseURL: config.baseURL
  });
  return config;
}, function (error) {
  console.error('Request Error:', error);
  return Promise.reject(error);
});

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(function (response) {
  console.log('Response:', {
    status: response.status,
    headers: response.headers,
    data: response.data
  });
  return response;
}, function (error) {
  console.error('Response Error:', {
    status: error.response?.status,
    statusText: error.response?.statusText,
    headers: error.response?.headers,
    data: error.response?.data
  });
  return Promise.reject(error);
});

export const AuthService = {
  signup: async (userData: SignupData) => {
    try {
      console.log('Attempting signup with URL:', `${API_URL}/signup`);
      const response = await axiosInstance.post('/signup', userData);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
      
      return response.data;
    } catch (error) {
      console.error('Signup request failed:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response status:', error.response?.status);
        console.error('Response data:', error.response?.data);
      }
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      console.log('Attempting login with URL:', `${API_URL}/login`);
      const response = await axiosInstance.post('/login', { email, password });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
      
      return response.data;
    } catch (error) {
      console.error('Login request failed:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response status:', error.response?.status);
        console.error('Response data:', error.response?.data);
      }
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export type { SignupData };