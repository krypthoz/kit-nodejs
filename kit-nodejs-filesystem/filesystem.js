var fs = require('fs');

fs.writeFile('helloworld.txt', 'Hello world!', function (err) {
  if (err) throw err;
  console.log('File was Saved!');
});

console.log('example of filesystem api');