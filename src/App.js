import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WordList from './components/WordList';
import Blocks from './components/Blocks';
import './App.css';

const App = () => {
  const [sentence, setSentence] = useState('');

  const fetchData = async () => {
    const response = await axios.get(
      'https://api.hatchways.io/assessment/sentences/1'
    );
    setSentence(response.data.data.sentence);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <WordList sentence={sentence} />
      <Blocks sentence={sentence} />
    </div>
  );
};

export default App;
