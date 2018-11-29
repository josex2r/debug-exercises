const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, '..', 'package.json');
const package = fs.readFileSync(filepath, 'utf-8');
const json = JSON.parse(package);

console.log(`The version is ${json.version}`);
