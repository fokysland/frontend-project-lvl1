import engine from '../engine';
import getRandom from '../randomizer';

const message = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandom(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    correctAnswer,
    question,
  };
};

export default () => engine(message, getQuestionAndAnswer);
