import React, { useState } from 'react';

const GreetingComponent = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default GreetingComponent;
