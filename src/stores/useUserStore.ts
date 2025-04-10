import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'student' | 'instructor' | 'admin';
export type ThemeMode = 'dark' | 'light' | 'system';

interface UserState {
  role: UserRole;
  theme: ThemeMode;
  
  // Actions
  setRole: (role: UserRole) => void;
  setTheme: (theme: ThemeMode) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: 'student',
      theme: 'system',
      
      setRole: (role) => set({ role }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'smart-learnify-user-store',
      // Use this to handle data version migrations if needed
      version: 1,
    }
  )
); 