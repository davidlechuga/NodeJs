const fs = require ('fs');

fs.mkdir('pugfolders', (err) => {
    if (err) throw err;
 }); 


 fs.rmdir  ('pug folder`s', (err)=> {
     if (err) throw err;
 });


 /*
 fs.readdir('pugfolders',(err)=> {
    if (err) throw err;
});

*/