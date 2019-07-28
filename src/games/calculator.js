import engine from '../engine';

const getRandom = () => Math.round(Math.random() * 100);
const getRandomOperation = operations => operations[Math.floor(Math.random() * operations.length)];

export default () => {
  const message = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];

  const callback = () => {
    const operator = getRandomOperation(operations);
    const firstNumber = getRandom();
    const secondNumber = getRandom();
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = firstNumber + secondNumber;
        break;
      case '-':
        correctAnswer = firstNumber - secondNumber;
        break;
      case '*':
        correctAnswer = firstNumber * secondNumber;
        break;
      default:
        throw new Error(`Unkown operation: ${operator}`);
    }

    correctAnswer = String(correctAnswer);
    return {
      correctAnswer,
      question: `${firstNumber} ${operator} ${secondNumber}?`,
    };
  };

  engine.start(message, callback);
};
