const fs = require('fs');
const http = require('http');

const filename = process.argv[3];

server = http.createServer(function(request, response) {
//fs.createReadStream method, stream the file contents to the response 
  fs.createReadStream(filename).pipe(response);
});
server.listen(process.argv[2]);