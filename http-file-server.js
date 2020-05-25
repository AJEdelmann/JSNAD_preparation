/*
  Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the second  
  command-line argument. You must use the fs.createReadStream() method to  
  stream the file contents to the response. 
*/


const fs = require('fs');
const http = require('http');

server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})
    //fs.createReadStream method, stream the file contents to the response 
    fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));

/*
LEASSONS LEARNED:
The http.createServer() method turns your computer into an HTTP server.
It creates an HTTP Server object. And the HTTP Server object can listen to ports on 
your computer and execute a function, a requestListener, each time a request is made.

response.writeHead(statusCode[, statusMessage][, headers])
Sends a response header to the request. The status code is a 3-digit HTTP status code, 
like 404. The last argument, headers, are the response headers. Optionally one can 
give a human-readable statusMessage as the second argument.
This method must only be called once on a message and it must be called before 
response.end() is called.
*/