import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm'
import Home from './components/Home'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className='bg-cont'>
      {!loggedIn ? <LoginForm onLogin={handleLogin} /> : <Home />}
    </div>
  );
}

export default App;
