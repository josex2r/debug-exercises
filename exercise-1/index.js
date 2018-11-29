const wait = require('./wait');

async function waitAndPrint(text, ms) {
  await wait(ms);
  console.log(text);
}

const delay = 2000;

console.log(`Waiting ${delay}ms...`);

waitAndPrint('Finish!', delay);
