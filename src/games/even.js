import engine from '../engine';
import getRandom from '../randomizer';

const isEven = number => Boolean(number % 2);
const getQuestionAndAnswer = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'no' : 'yes';

  return {
    correctAnswer,
    question: `${question}`,
  };
};

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  engine.start(message, getQuestionAndAnswer);
};
