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

const generateRandomNumbers = () => ({
  a: getRandom(),
  b: getRandom(),
});

const getQuestionAndAnswer = () => {
  const { a, b } = generateRandomNumbers();
  let correctAnswer = findGcd(a, b);
  correctAnswer = String(correctAnswer);
  return {
    correctAnswer,
    question: `${a} ${b}`,
  };
};

export default () => engine.start(message, getQuestionAndAnswer);
