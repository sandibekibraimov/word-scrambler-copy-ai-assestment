import React from 'react';

import './block.css';
import Square from './Square';

const Block = ({ word }) => {
  const lettersArr = word.split('');
  lettersArr.push('');
  console.log(lettersArr);
  return (
    <div className='blockContainer'>
      {lettersArr.map((el, index) => (
        <Square key={index} letter={el} />
      ))}
    </div>
  );
};

export default Block;
