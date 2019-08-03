import engine from '../engine';
import getRandom from '../randomizer';

const message = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestionAndAnswer = () => {
  const start = getRandom();
  const step = getRandom(progressionLength);
  const hiddenElementId = getRandom(progressionLength);
  const progression = [];
  for (let i = start; i <= (progressionLength - 1) * step + start; i += step) {
    progression.push(i);
  }
  let correctAnswer = progression[hiddenElementId];
  progression[hiddenElementId] = '..';
  const question = progression.join(' ');
  correctAnswer = String(correctAnswer);
  return {
    correctAnswer,
    question,
  };
};

export default () => engine.start(message, getQuestionAndAnswer);
