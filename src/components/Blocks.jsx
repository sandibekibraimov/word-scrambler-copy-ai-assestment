import React from 'react';
import './blocks.css';
import Block from './Block';

const Blocks = ({ sentence, nextSentence }) => {
  const sentenceArr = sentence.split(' ');
  return (
    <div className='blocksContainer'>
      {sentenceArr.map((wordBlock, index) => (
        <Block key={index} word={wordBlock} />
      ))}
      <button className='nextbtn' onClick={() => nextSentence(1)}>
        Next
      </button>
    </div>
  );
};

export default Blocks;
