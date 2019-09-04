const fs = require ('fs');

fs.readFile('index.js', 'utf8', (error, data)=> {
    if (error) throw error;
    console.log(data)
    
})

