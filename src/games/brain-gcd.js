import game from './game';

const findGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }

  return firstNum;
};

const generateProportionalNumbers = () => {
  const maxFactor = 10;
  const firstNum = game.getRandom();
  const factor = Math.round(Math.random() * maxFactor);
  const secondNum = firstNum * factor;
  return { firstNum, secondNum };
};

const generateRandomNumbers = () => ({
  firstNum: game.getRandom(),
  secondNum: game.getRandom(),
});

export default () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const { firstNum, secondNum } = Math.random() < 0.5
      ? generateProportionalNumbers()
      : generateRandomNumbers(); // to encrease propotional numbers chance
    let correctAnswer = findGcd(firstNum, secondNum);
    correctAnswer = String(correctAnswer);
    return {
      correctAnswer,
      question: `${firstNum} ${secondNum}`,
    };
  };

  game.next(state, callback, name);
};
