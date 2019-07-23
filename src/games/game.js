import readlineSync from 'readline-sync';
import hello from '../hello';

const game = {
  hello: message => hello(message),
  getInitState: () => ({
    counter: 0,
    maxAttemps: 2,
  }),
  getName: () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('\n');
    return name;
  },
  getAnswer: () => readlineSync.question('Your answer: '),
  getRandom: () => Math.round(Math.random() * 100),
  consoleQuestion: question => console.log(`Question: ${question}`),
  beforeStart: (message) => {
    hello(message);
    return {
      state: game.getInitState(),
      name: game.getName(),
    };
  },
  next: (state, callback, name) => {
    const { question, correctAnswer } = callback();
    game.consoleQuestion(question);
    const userAnswer = game.getAnswer();
    if (userAnswer === correctAnswer && state.counter < state.maxAttemps) {
      console.log('Correct!');
      const newState = { ...state, counter: state.counter + 1 };
      console.log('\n');
      game.next(newState, callback, name);
    } else if (userAnswer === correctAnswer) {
      console.log('Correct!');
      console.log('\n');
      game.finish(name);
    } else {
      console.log('\n');
      game.defeat(userAnswer, correctAnswer, name);
    }
  },
  defeat: (userAnswer, correctAnswer, userName) => {
    const messages = [
      `${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`,
      `Let's try again, ${userName}!`,
    ].join('\n');
    console.log(messages);
  },
  finish: (userName) => {
    console.log(`Congratulations, ${userName}!`);
  },
};

export default game;
