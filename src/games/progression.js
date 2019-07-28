import engine from '../engine';

const getRandom = (factor = 100) => Math.round(Math.random() * factor);

export default () => {
  const message = 'What number is missing in the progression?';

  const callback = () => {
    const progressionLength = 10;
    const start = getRandom();
    const step = getRandom(progressionLength);
    const hiddenId = getRandom(progressionLength);
    const progression = [];
    for (let i = start; i <= (progressionLength - 1) * step + start; i += step) {
      progression.push(i);
    }
    let correctAnswer = progression[hiddenId];
    progression[hiddenId] = '..';
    const question = progression.join(' ');
    correctAnswer = String(correctAnswer);
    return {
      correctAnswer,
      question,
    };
  };

  engine.start(message, callback);
};
