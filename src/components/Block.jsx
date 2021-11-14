import React from 'react';

import './block.css';
import Square from './Square';

const Block = ({ word, pages }) => {
  const lettersArr = word.split('');
  lettersArr.push('');

  return (
    <div className='blockContainer'>
      {lettersArr.map((el, index) => (
        <Square key={index} letter={el} pages={pages} />
      ))}
    </div>
  );
};

export default Block;
