import React, { Fragment } from 'react';
import { handleScramble } from '../utils/scramble';
import './wordlist.css';

const WordList = ({ sentence }) => {
  const scrambled = handleScramble(sentence);

  return (
    <Fragment>
      <h1 className='words'>
        {scrambled.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </h1>

      <p>Guess the sentence! Start typing.</p>
      <p> The yellow blocks are meant for spaces</p>

      <h1 className='score'>Score: 0</h1>
    </Fragment>
  );
};

export default WordList;
