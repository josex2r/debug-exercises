const http = require('http');

http.createServer((req, res) => {
  const { url: pathname } = req;

  if (pathname === '/') {
    res.end('You are in the index page!')
  } else {
    res.writeHead(404);
    res.end('404, page not found :(');
  }
}).listen(8080);
