import React, { Fragment, useState, useEffect } from 'react';
import './square.css';

const Square = ({ letter, pages }) => {
  const [inputLetter, setInputLetter] = useState();
  let count = [];

  const handleInput = (e) => {
    setInputLetter(e.target.value);
    checkLetter(inputLetter);
  };

  const checkLetter = (inp) => {
    if (inp === letter) {
      count.push(inp);
    }
  };

  useEffect(() => {
    setInputLetter('');
  }, [pages]);

  return (
    <Fragment>
      <input
        className='squareContainer'
        style={{
          background:
            letter === inputLetter && letter.length !== 0
              ? '#4caf50'
              : letter.length === 0
              ? '#ffb74d'
              : '#e1e1e1',
        }}
        disabled={letter.length === 0}
        value={inputLetter}
        onChange={handleInput}
        maxLength='1'
      />
    </Fragment>
  );
};

export default Square;
