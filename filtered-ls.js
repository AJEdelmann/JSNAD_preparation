/*
Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  Keep in mind that the first arguments of your program are not the first  
  values of the process.argv array, as the first two values are reserved for  
  system info by Node.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O. 
*/

const fs = require('fs');
const folder = process.argv[2];
const extension = '.'+process.argv[3];

fs.readdir(folder, (err, files) => {
    if(err) return console.log(err);
    files.filter(file => {
      if (file.includes(extension)) {
        console.log(file)
      }
    });
  });

/*
LEASSONS LEARNED - fs.readdir(path[,options], callback)

Asynchronous readdir(3). Reads the contents of a directory. The callback gets 
two arguments (err, files) where files is an array of the names of the files in 
the directory excluding '.' and '..'.

The optional options argument can be a string specifying an encoding, or an object with 
an encoding property specifying the character encoding to use for the filenames passed to 
the callback. If the encoding is set to 'buffer', the filenames returned will be passed 
as Buffer objects.
*/ 