import readlineSync from 'readline-sync';

const state = {
  counter: 0,
  maxAttemps: 2,
};
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('\n');
  return name;
};
const getAnswer = () => readlineSync.question('Your answer: ');
const hello = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
};
const consoleQuestion = question => console.log(`Question: ${question}`);
const defeat = (userAnswer, correctAnswer, userName) => {
  const messages = [
    `${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`,
    `Let's try again, ${userName}!`,
  ].join('\n');
  console.log(messages);
};
const finish = userName => console.log(`Congratulations, ${userName}!`);
const iter = (callback, name, currentState) => {
  const { question, correctAnswer } = callback();
  consoleQuestion(question);
  const userAnswer = getAnswer();
  if (userAnswer === correctAnswer && currentState.counter < currentState.maxAttemps) {
    console.log('Correct!');
    const newState = { ...currentState, counter: currentState.counter + 1 };
    console.log('\n');
    iter(callback, name, newState);
  } else if (userAnswer === correctAnswer) {
    console.log('Correct!');
    console.log('\n');
    finish(name);
  } else {
    console.log('\n');
    defeat(userAnswer, correctAnswer, name);
  }
};

const engine = {
  start: (message, callback) => {
    hello(message);
    const name = getName();
    iter(callback, name, state);
  },
};

export default engine;
