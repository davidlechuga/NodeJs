const fs = require ('fs');


fs.readFile('message.doc', 'utf8', (error, data) =>{
    if (error) console.error('No pude leer el archivo')
    console.log('data:', data)
})

