/* 
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout). 
*/

const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  }).on('error', console.error)

  /*
  LEASSONS LEARNED:  
  http.get(options[, callback])
  http.get(url[, options][, callback])

  Since most requests are GET requests without bodies, Node.js provides this convenience 
  method. The only difference between this method and http.request() is that it sets the 
  method to GET and calls req.end() automatically. The callback must take care to consume 
  the response data for reasons stated in http.ClientRequest section.

The callback is invoked with a single argument that is an instance of http.IncomingMessage
  */