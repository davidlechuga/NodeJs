const fs = require('fs');


fs.writeFile('hola.pug' , '.pug created', (err) => {
if (err) throw err;
console.log('hola.pug saved')

fs.copyFile('hola.pug','holaa.pug', (err) =>{
if (err) console.error('the copy is not sucefully');
console.log('copy sucefully')
                                             });    

fs.appendFile('holo.pug', 'new holo .pug', 'utf8', (error) => {
if (error) console.log('error to add holo .pg');
console.log('ok')                                             });  

fs.unlink ('holo.pug', (err) => {
  if (err) console.log('error to delete holaa.pug');
                                });
                                                  });


                                                

/*  HACER nuestra funcion*/
