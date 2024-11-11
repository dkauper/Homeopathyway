import create from 'zustand';
import { AuthService } from '../services/auth';

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

interface SignupData {
  firstName: string;
  lastName: string;
  prefix?: string;
  age?: number;
  email: string;
  password: string;
  homePhone?: string;
  mobilePhone?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    const response = await AuthService.login(email, password);
    set({ user: response.user, isAuthenticated: true });
  },
  signup: async (userData: SignupData) => {
    const response = await AuthService.signup(userData);
    set({ user: response.user, isAuthenticated: true });
  },
  logout: () => {
    AuthService.logout();
    set({ user: null, isAuthenticated: false });
  },
}));