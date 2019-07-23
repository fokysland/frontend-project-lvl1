import readlineSync from 'readline-sync';
import hello from './hello';

export default () => {
  const state = {
    counter: 0,
  };
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const name = hello(message);

  const finish = (userName) => {
    console.log(`Congratulations, ${userName}!`);
  };

  const defeat = (userAnswer, correctAnswer, userName) => {
    const messages = [
      `${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`,
      `Let's try again, ${userName}!`,
    ].join('\n');
    console.log(messages);
  };

  const next = () => {
    console.log('\n');
    const num = Math.round(Math.random() * 100);
    const question = `Question: ${num}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (num % 2) ? 'no' : 'yes';
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect && state.counter < 2) {
      console.log('Correct!');
      state.counter += 1;
      next();
    } else if (isCorrect) {
      finish(name);
    } else {
      defeat(userAnswer, correctAnswer, name);
    }
  };

  next();
};
