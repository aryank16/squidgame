
import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import GreenLightRedLight from './components/greenlightRedlight';
import './App.css'; 

function App() {
  const [user, setUser] = useState(null);

  const handleStartGame = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      <h1 style={{color:'#730f2a'}}>GreenLight RedLight Game </h1> 
      {!user ? (
        <RegistrationForm onStartGame={handleStartGame} />
      ) : (
        <GreenLightRedLight user={user} />
      )}
    </div>
  );
}

export default App;
