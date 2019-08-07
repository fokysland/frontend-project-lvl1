import engine from '../engine';
import getRandom from '../randomizer';

const message = 'Find the greatest common divisor of given numbers.';
const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const getQuestionAndAnswer = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const correctAnswer = findGcd(a, b);
  return {
    correctAnswer: String(correctAnswer),
    question: `${a} ${b}`,
  };
};

export default () => engine(message, getQuestionAndAnswer);
