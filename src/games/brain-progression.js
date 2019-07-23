import game from './game';

export default () => {
  const message = 'What number is missing in the progression?';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const start = game.getRandom();
    const step = Math.round(Math.random() * 10);
    const hiddenId = Math.round(Math.random() * 10);
    const numbers = [];
    for (let i = start; i <= 9 * step + start; i += step) {
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
