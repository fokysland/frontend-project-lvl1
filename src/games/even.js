import engine from '../engine';

const getRandom = () => Math.round(Math.random() * 100);

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';

  const callback = () => {
    const number = getRandom();
    const correctAnswer = number % 2 ? 'no' : 'yes';

    return {
      correctAnswer,
      question: `${number}`,
    };
  };

  engine.start(message, callback);
};
