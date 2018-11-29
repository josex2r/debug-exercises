const http = require('http');

http.createServer(async(req, res) => {
  const { pathname } = await req;

  if (pathname === '/') {
    res.write('You are in the index page!')
  } else {
    res.writeHead(404);
    res.end('404, page not found :(');
  }
}).listenToPort(99999999);
