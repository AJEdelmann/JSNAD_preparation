const fs = require('fs');

const ex3 = () => {
    const text = fs.readFileSync(process.argv[2], 'utf8');
    const lines = text.split('\n').length-1;
    console.log(lines);
}

ex3();

