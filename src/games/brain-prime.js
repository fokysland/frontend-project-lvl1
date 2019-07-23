import game from './game';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (!(num % i)) return false;
  }
  return true;
};

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const { state, name } = game.beforeStart(message);

  const callback = () => {
    const number = game.getRandom();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return {
      correctAnswer,
      question: `${number}`,
    };
  };

  game.next(state, callback, name);
};
