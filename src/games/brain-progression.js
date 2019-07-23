import game from './game';

export default () => {
  const message = 'What number is missing in the progression?';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const stepsNumber = 10;
    const start = game.getRandom();
    const step = Math.round(Math.random() * stepsNumber);
    const hiddenId = Math.round(Math.random() * stepsNumber);
    const numbers = [];
    for (let i = start; i <= (stepsNumber - 1) * step + start; i += step) {
      numbers.push(i);
    }
    let correctAnswer = numbers[hiddenId];
    numbers[hiddenId] = '..';
    const question = numbers.join(' ');
    correctAnswer = String(correctAnswer);
    return {
      correctAnswer,
      question,
    };
  };

  game.next(state, callback, name);
};
