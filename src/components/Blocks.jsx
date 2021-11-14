import React from 'react';
import './blocks.css';
import Block from './Block';

const Blocks = ({ sentence }) => {
  const sentenceArr = sentence.split(' ');
  return (
    <div className='blocksContainer'>
      {sentenceArr.map((wordBlock, index) => (
        <Block key={index} word={wordBlock} />
      ))}
    </div>
  );
};

export default Blocks;
