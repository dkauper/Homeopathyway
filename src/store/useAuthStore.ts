import create from 'zustand';
import { AuthService } from '../services/auth';

interface AuthState {
  user: null | { id: string; email: string };
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    const user = await AuthService.login(email, password);
    set({ user, isAuthenticated: true });
  },
  signup: async (userData: any) => {
    const user = await AuthService.signup(userData);
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    AuthService.logout();
    set({ user: null, isAuthenticated: false });
  },
}));