import game from './game';

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

const generateProportionalNumbers = () => {
  const firstNum = game.getRandom();
  const factor = Math.round(Math.random() * 10);
  return { a: firstNum, b: firstNum * factor };
};

const generateRandomNumbers = () => ({
  a: game.getRandom(),
  b: game.getRandom(),
});

export default () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const { a, b } = Math.random() < 0.5 ? generateProportionalNumbers() : generateRandomNumbers();
    let correctAnswer = findGcd(a, b);
    correctAnswer = String(correctAnswer);
    return {
      correctAnswer,
      question: `${a} ${b}`,
    };
  };

  game.next(state, callback, name);
};
