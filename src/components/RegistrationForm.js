import React, { useState } from 'react';

function RegistrationForm({ onStartGame }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!name || !email || !mobile) {
      alert('Please fill in all fields.');
      return;
    }

   
    onStartGame({ name, email, mobile, difficulty });
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
          <label>Difficulty Level:</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default RegistrationForm;


