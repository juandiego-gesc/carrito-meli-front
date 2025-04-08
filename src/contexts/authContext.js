import React, { createContext, useState } from 'react';
import { login as loginService} from '../service/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = async (username, password) => {
    const data = await loginService(username, password);
    if (data.access_token) {
      setToken(data.access_token);
      localStorage.setItem('token', data.access_token);
    }
    return data;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};