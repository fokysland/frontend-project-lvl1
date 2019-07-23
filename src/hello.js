import readlineSync from 'readline-sync';

export default (message) => {
  console.log('Welcome to the Brain Games!');

  if (message) {
    console.log(message);
  }

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
