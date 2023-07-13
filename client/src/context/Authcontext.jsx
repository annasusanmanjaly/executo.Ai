// AuthContext.js

import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("user11",user)

  const login = (userData) => {
    console.log("USERDAQTA",userData)
    // Perform login logic and set the user data
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic and reset the user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
