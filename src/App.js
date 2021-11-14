import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WordList from './components/WordList';
import Blocks from './components/Blocks';
import './App.css';

const App = () => {
  const [sentence, setSentence] = useState('');
  const [pages, setPages] = useState(1);
  const [score, setScore] = useState(0);

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
    }
  };

  return (
    <div className='container'>
      <WordList sentence={sentence} score={score} />
      <Blocks sentence={sentence} />

      <button className='nextbtn' onClick={() => nextSentence(1)}>
        Next
      </button>
    </div>
  );
};

export default App;
