import engine from '../engine';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandom = () => Math.round(Math.random() * 100);

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (!(num % i)) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandom();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    correctAnswer,
    question: `${number}`,
  };
};

export default () => engine(message, getQuestionAndAnswer);
