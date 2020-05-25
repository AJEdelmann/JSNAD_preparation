/*
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  
*/

const fs = require('fs');  
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, content) => {
    if(err) {
        return console.log(err);
    }
    console.log(content.split('\n').length - 1);
});

/*
LEASSONS LEARNED: fs.readFile(path[, options], callback)

Asynchronously reads the entire contents of a file.
The callback is passed two arguments (err, data), where data is the contents of the file.
If no encoding is specified, then the raw buffer is returned.
If options is a string, then it specifies the encoding.

When the path is a directory, the behavior of fs.readFile() and 
fs.readFileSync() is platform-specific. On macOS, Linux, and Windows, an error will be 
returned. On FreeBSD, a representation of the directory's contents will be returned.

The fs.readFile() function buffers the entire file. To minimize memory costs, 
when possible prefer streaming via fs.createReadStream().
*/