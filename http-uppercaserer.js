const http = require('http');
const map = require('through2-map');

uc = map(chunk => chunk.toString().toUpperCase());

server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    req.pipe(uc).pipe(res);
  }
});
server.listen(process.argv[2]);