import React from 'react';

import './square.css';

const Square = ({ letter }) => {
  return (
    <input
      className='squareContainer'
      style={{ background: letter.length === 0 ? '#ffb74d' : '#e1e1e1' }}
    />
  );
};

export default Square;
