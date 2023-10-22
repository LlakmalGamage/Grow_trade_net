import React, { createContext, useState, useContext, useEffect, useCallback, useRef } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Invalid username or password. Please try again.',
  CONNECTION: 'Connection error. Please check your internet connection and try again.',
  UNKNOWN: 'An unknown error occurred.',
};

const login = async (username, password) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(ERROR_MESSAGES.UNAUTHORIZED);
      } else {
        throw new Error(ERROR_MESSAGES.UNKNOWN);
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error(ERROR_MESSAGES.CONNECTION);
    } else {
      throw error;
    }
  }
};

const refreshToken = async (authTokens) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    if (!response.ok) {
      throw new Error(ERROR_MESSAGES.UNAUTHORIZED);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.CONNECTION);
  }
};

export function AuthProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(() => JSON.parse(localStorage.getItem('authTokens')) || null);
  const [user, setUser] = useState(() => authTokens ? jwt_decode(authTokens.access) : null);
  const [loading, setLoading] = useState(true);
  const isRefreshingTokenRef = useRef(false);

  const handleRefreshToken = useCallback(async () => {
    if (isRefreshingTokenRef.current) return;
    isRefreshingTokenRef.current = true;

    try {
      const data = await refreshToken(authTokens);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } catch (error) {
      setLoading(false);
    } finally {
      isRefreshingTokenRef.current = false;
    }
  }, [authTokens]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (authTokens && !isRefreshingTokenRef.current) {
        handleRefreshToken();
      }
    }, 1000 * 60 * 4);

    if (loading) {
      if (authTokens) {
        handleRefreshToken();
      }
      setLoading(false);
    }

    return () => clearInterval(interval);
  }, [authTokens, loading, handleRefreshToken]);

  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
  };

  const contextData = {
    user,
    authTokens,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
