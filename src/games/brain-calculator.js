import game from './game';

export default () => {
  const message = 'What is the result of the expression?';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const operations = ['+', '-', '*'];
    const operator = operations[Math.floor(Math.random() * operations.length)];
    const firstNumber = game.getRandom();
    const secondNumber = game.getRandom();
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

  game.next(state, callback, name);
};
