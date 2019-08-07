import readlineSync from 'readline-sync';

const maxAttempt = 3;

const engine = (message, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('\n');
  const iter = (counter) => {
    if (counter === maxAttempt) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      console.log('\n');
      iter(counter + 1);
      return;
    }
    console.log('\n');
    console.log(`${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
  };

  iter(0);
};

export default engine;
