import engine from '../engine';
import getRandom from '../randomizer';

const message = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getQuestionAndAnswer = () => {
  const operator = operations[getRandom(operations.length - 1)];
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
  return {
    correctAnswer: String(correctAnswer),
    question: `${firstNumber} ${operator} ${secondNumber}?`,
  };
};

export default () => engine(message, getQuestionAndAnswer);
