export const handleScramble = (sentence) => {
  const wordsArray = sentence.split(' ');
  const shuffled = [];
  for (let i = 0; i < wordsArray.length; i++) {
    shuffled.push(shuffle(wordsArray[i]));
  }
  return shuffled;
};

const shuffle = (word) => {
  if (word.length < 3 && word !== '') {
    return word;
  } else {
    const lettersArr = word.split('');

    for (let i = 1; i < lettersArr.length - 2; i++) {
      let j = randomNumber(lettersArr.length - 2);
      let letter = lettersArr[i];
      lettersArr[i] = lettersArr[j];
      lettersArr[j] = letter;
    }
    const newWord = lettersArr.join('');
    return newWord;
  }
};

const randomNumber = (x) => {
  return Math.ceil(Math.random() * x);
};
