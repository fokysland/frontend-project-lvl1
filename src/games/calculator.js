import engine from '../engine';
import getRandom from '../randomizer';

const getRandomOperation = operations => operations[getRandom(operations.length - 1)];

const operations = ['+', '-', '*'];
const getQuestionAndAnswer = () => {
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

export default () => {
  const message = 'What is the result of the expression?';
  engine.start(message, getQuestionAndAnswer);
};
