const fs = require('fs');

const data = new Uint8Array(Buffer.from('index-1.js'));
fs.writeFile('message.doc', 'el tiempo apremia XD', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});