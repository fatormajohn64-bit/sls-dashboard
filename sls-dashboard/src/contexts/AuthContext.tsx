import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('sls_token'));
  const [user, setUser] = useState<User | null>(
    localStorage.getItem('sls_user') ? JSON.parse(localStorage.getItem('sls_user') as string) : null
  );

  const login = (newToken: string, userData: User) => {
    localStorage.setItem('sls_token', newToken);
    localStorage.setItem('sls_user', JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('sls_token');
    localStorage.removeItem('sls_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
