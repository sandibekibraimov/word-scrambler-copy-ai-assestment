import React, { useState } from 'react';

import './square.css';

const Square = ({ letter }) => {
  const [inputLet, setInputLet] = useState('');
  const allLetters = [];

  const handlePress = (e) => {
    e.preventDefault();
    handleCheckLetter(inputLet);

    console.log(allLetters);
  };

  const handleCheckLetter = (input) => {
    allLetters.push(input);
  };
  return (
    <input
      className='squareContainer'
      style={{
        background:
          letter === inputLet && letter.length !== 0
            ? '#4caf50'
            : letter.length === 0
            ? '#ffb74d'
            : '#e1e1e1',
      }}
      disabled={letter.length === 0}
      value={inputLet}
      onChange={(e) => setInputLet(e.target.value)}
      onClick={handlePress}
      maxLength='1'
    />
  );
};

export default Square;
