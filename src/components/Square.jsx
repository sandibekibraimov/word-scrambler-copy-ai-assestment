import React, { Fragment, useState, useEffect } from 'react';

import './square.css';

const Square = ({ letter, pages }) => {
  const [inputLet, setInputLet] = useState('');

  useEffect(() => {
    setInputLet('');
  }, [pages]);

  return (
    <Fragment>
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
        maxLength='1'
      />
    </Fragment>
  );
};

export default Square;
