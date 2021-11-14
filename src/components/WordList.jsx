import React from 'react';
import { handleScramble } from '../utils/scramble';
import './wordlist.css';

const WordList = ({ sentence, score }) => {
  const scrambled = handleScramble(sentence);

  return (
    <div className='wordContainer'>
      <h1 className='words'>
        {scrambled.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </h1>

      <p>Guess the sentence! Start typing.</p>
      <p> The yellow blocks are meant for spaces</p>

      <h1 className='score'>Score: {score}</h1>
    </div>
  );
};

export default WordList;
