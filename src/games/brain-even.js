import game from './game';

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const number = game.getRandom();
    const correctAnswer = number % 2 ? 'no' : 'yes';

    return {
      correctAnswer,
      question: `${number}`,
    };
  };

  game.next(state, callback, name);
};
