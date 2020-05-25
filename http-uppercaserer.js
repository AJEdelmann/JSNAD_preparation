/*
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
*/

const http = require('http');
const map = require('through2-map');

uc = map(chunk => chunk.toString().toUpperCase());

server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    req.pipe(uc).pipe(res);
  }
});
server.listen(process.argv[2]);

/*
LEASSONS LEARNED:   
  There are a number of different packages in npm that you can use to  
  "transform" stream data as it's passing through. For this exercise the  
  through2-map package offers the simplest API.  
   
  through2-map allows you to create a transform stream using only a single  
  function that takes a chunk of data and returns a chunk of data. It's  
  designed to work much like Array#map() but for streams
*/