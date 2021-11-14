import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WordList from './components/WordList';
import Blocks from './components/Blocks';
import './App.css';

const App = () => {
  const [sentence, setSentence] = useState('');
  const [pages, setPages] = useState(1);
  const [score, setScore] = useState(0);

  const sentencesLength = sentence.replace(/[^\w]/g, '').split('').length;

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.hatchways.io/assessment/sentences/${pages}`
    );
    setSentence(response.data.data.sentence);
  };

  useEffect(() => {
    fetchData();
  }, [pages]);

  const nextSentence = (page) => {
    if (page < 11) {
      setPages((prevPage) => prevPage + page);
      setScore((prevScore) => prevScore + 1);
    }
  };

  const Modal = () => {
    return (
      <div>
        <h2>You win!</h2>
      </div>
    );
  };

  return (
    <div className='container'>
      {pages < 11 ? (
        <span>
          <WordList sentence={sentence} score={score} />
          <Blocks
            sentence={sentence}
            nextSentence={nextSentence}
            pages={pages}
          />
        </span>
      ) : (
        <Modal />
      )}
    </div>
  );
};

export default App;
