import engine from '../engine';
import getRandom from '../randomizer';

const message = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestionAndAnswer = () => {
  const start = getRandom();
  const step = getRandom(progressionLength - 1);
  const hiddenElementId = getRandom(progressionLength - 1);
  const progression = [];
  for (let i = start; i <= (progressionLength - 1) * step + start; i += step) {
    progression.push(i);
  }
  const correctAnswer = progression[hiddenElementId];
  progression[hiddenElementId] = '..';
  const question = progression.join(' ');
  return {
    correctAnswer: String(correctAnswer),
    question,
  };
};

export default () => engine(message, getQuestionAndAnswer);
