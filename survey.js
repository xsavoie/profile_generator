const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let allAnswers = []

rl.question("What's your name? Nicknames are also acceptable. ", (answer) => {
  allAnswers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    allAnswers.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      allAnswers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        allAnswers.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          allAnswers.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            allAnswers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              allAnswers.push(answer);
              console.log(allAnswers)
              let message = `My name is ${allAnswers[0]} and I like to ${allAnswers[1]} while listening to ${allAnswers[2]}. My favorite meal of that day is ${allAnswers[3]}, preferably ${allAnswers[4]}. My favorite sport is ${allAnswers[5]} and my superpower is ${allAnswers[6]}!`
              console.log(message)
              rl.close();

            });
          });
        });
      });
    });
  });
});
