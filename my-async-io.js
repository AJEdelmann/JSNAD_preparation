const fs = require('fs');  
const file = process.argv[2];

// MY SOLUTION
fs.readFile(file, 'utf8', (err, content) => {
    if(err) {
        return console.log(err);
    }
    console.log(content.split('\n').length - 1);
});

/*
// OFICIAL SOLUTION
fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/