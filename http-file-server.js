const fs = require('fs');
const http = require('http');

server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})
    //fs.createReadStream method, stream the file contents to the response 
    fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));