import engine from '../engine';
import getRandom from '../randomizer';

const message = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestionAndAnswer = () => {
  const start = getRandom(-100, 100);
  const step = getRandom(1, 10);
  const hiddenElementId = getRandom(0, progressionLength - 1);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(i * step + start);
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
