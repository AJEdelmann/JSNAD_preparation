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
