import engine from '../engine';
import getRandom from '../randomizer';

const message = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'no' : 'yes';

  return {
    correctAnswer,
    question,
  };
};

export default () => engine(message, getQuestionAndAnswer);
