import readlineSync from 'readline-sync';

const maxAttemps = 3;

const engine = {
  start: (message, getQuestionAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    console.log(message);
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('\n');

    const iter = (currentAttempsCounter) => {
      const { question, correctAnswer } = getQuestionAndAnswer();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (currentAttempsCounter > maxAttemps) {
        console.log('Correct!');
        console.log('\n');
        console.log(`Congratulations, ${name}!`);
      }
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        console.log('\n');
        iter(currentAttempsCounter + 1);
      } else {
        console.log('\n');
        console.log(`${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`);
        console.log(`Let's try again, ${name}!`);
      }
    };

    iter(0);
  },
};

export default engine;
