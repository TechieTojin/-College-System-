// src/App.js
import React, { useState } from 'react';
import ImageFetcher from './ImageFetcher';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });

  const handleLogin = (username, password) => {
    setUserInfo({ username, password });
    setIsLoggedIn(true);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>College Image Fetcher</h1>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome, {userInfo.username}!</h2>
          <ImageFetcher />
        </div>
      )}
    </div>
  );
};

export default App;
