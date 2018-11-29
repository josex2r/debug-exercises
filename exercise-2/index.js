const fs = require('fs');

const filepath = path.resolve('package.json');
const package = fs.readFile(filepath, 'utf-8');
const json = JSON.stringify(package);

console.log(`The version is ${json.version}`);
