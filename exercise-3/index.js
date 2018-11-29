const fs = require('fs');
const path = require('path');
const http = require('http');

// const filepath = path.resolve(__dirname, '..', 'package.json');
// const package = fs.readFileSync(filepath, 'utf-8');
// const json = JSON.parse(package);

// console.log(`The version is ${json.version}`);

http.createServer((req, res) => {
  const { url: pathname } = req;

  if (pathname === '/') {
    res.end('You are in the index page!')
  } else {
    res.writeHead(404);
    res.end('404, page not found :(');
  }
}).listen(8080);
