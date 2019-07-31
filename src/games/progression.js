import engine from '../engine';
import getRandom from '../randomizer';

const getQuestionAndAnswer = () => {
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

export default () => {
  const message = 'What number is missing in the progression?';
  engine.start(message, getQuestionAndAnswer);
};
