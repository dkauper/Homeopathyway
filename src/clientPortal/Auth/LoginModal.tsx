import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Tab,
  Tabs 
} from '@mui/material';
import { useAuthStore } from '../../store/useAuthStore';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

interface SignupFormData {
  firstName: string;
  lastName: string;
  prefix: string;
  age: string;  // Keep as string for form handling
  email: string;
  password: string;
  homePhone: string;
  mobilePhone: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const login = useAuthStore(state => state.login);
  const signup = useAuthStore(state => state.signup);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup state
  const [signupData, setSignupData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    prefix: '',
    age: '',
    email: '',
    password: '',
    homePhone: '',
    mobilePhone: ''
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(loginEmail, loginPassword);
      onClose();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Convert age to number or undefined if empty
      const parsedData = {
        ...signupData,
        age: signupData.age ? parseInt(signupData.age, 10) : undefined
      };
      await signup(parsedData);
      onClose();
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleSignupInputChange = (field: keyof SignupFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignupData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        {activeTab === 0 ? (
          // Login Form
          <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        ) : (
          // Signup Form
          <Box component="form" onSubmit={handleSignupSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={signupData.firstName}
              onChange={handleSignupInputChange('firstName')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={signupData.lastName}
              onChange={handleSignupInputChange('lastName')}
            />
            <TextField
              margin="normal"
              fullWidth
              id="prefix"
              label="Prefix (Mr./Mrs./Dr.)"
              name="prefix"
              value={signupData.prefix}
              onChange={handleSignupInputChange('prefix')}
            />
            <TextField
              margin="normal"
              fullWidth
              id="age"
              label="Age"
              name="age"
              type="number"
              value={signupData.age}
              onChange={handleSignupInputChange('age')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="signupEmail"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={signupData.email}
              onChange={handleSignupInputChange('email')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="signupPassword"
              value={signupData.password}
              onChange={handleSignupInputChange('password')}
            />
            <TextField
              margin="normal"
              fullWidth
              id="homePhone"
              label="Home Phone"
              name="homePhone"
              value={signupData.homePhone}
              onChange={handleSignupInputChange('homePhone')}
            />
            <TextField
              margin="normal"
              fullWidth
              id="mobilePhone"
              label="Mobile Phone"
              name="mobilePhone"
              value={signupData.mobilePhone}
              onChange={handleSignupInputChange('mobilePhone')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;