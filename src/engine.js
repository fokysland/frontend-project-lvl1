import readlineSync from 'readline-sync';

const state = {
  counter: 0,
  maxAttemps: 2,
};
const iter = (getQuestionAndAnswer, name, currentState) => {
  const { question, correctAnswer } = getQuestionAndAnswer();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer && currentState.counter < currentState.maxAttemps) {
    console.log('Correct!');
    const newState = { ...currentState, counter: currentState.counter + 1 };
    console.log('\n');
    iter(getQuestionAndAnswer, name, newState);
  } else if (userAnswer === correctAnswer) {
    console.log('Correct!');
    console.log('\n');
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log('\n');
    console.log(`${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
  }
};

const engine = {
  start: (message, callback) => {
    console.log('Welcome to the Brain Games!');
    console.log(message);
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('\n');
    iter(callback, name, state);
  },
};

export default engine;
