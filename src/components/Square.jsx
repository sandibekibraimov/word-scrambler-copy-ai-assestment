import React, { Fragment, useState, useEffect } from 'react';
import './square.css';

const Square = ({ letter, pages }) => {
  const [inputLetter, setInputLetter] = useState();

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
        onChange={(e) => setInputLetter(e.target.value)}
        maxLength='1'
      />
    </Fragment>
  );
};

export default Square;
