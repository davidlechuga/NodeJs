const express = require('express');
const app = express ();


  
/*

    if (url === '/hola' && method === 'GET') {
        response.write('<h1>HOLA GET </h1>')
        response.write('<div> <img src = "http://az778189.vo.msecnd.net/media/fotos/g/8d21d5094c7e3df4d7a4b04a6f727859.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
                                             }

    else if (url === '/hola' && method === 'POST'){
        response.write('<h1> HOLA POST </h1>')
        response.write('<div> <img src = "http://az778189.vo.msecnd.net/media/fotos/g/8d21d5094c7e3df4d7a4b04a6f727859.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
                                                   }

    else if (url === '/hola' && method === 'PUT') {
        response.write('<h1> HOLA PUT </h1>')
        response.write('<div> <img src = "https://www.unam.mx/sites/default/files/images/menu/730-600-1.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
                                                  }
    else{
        response.write('we cant response you')
                                             }                                                
                                              
    }).listen(4000, () =>{
    console.log('listening')
                         })

*/                       

app.get('/hola', (request, response) =>{
    console.log('HOLA')
    response.json({
        username: 'david lechuga'
                  })
    response.end()
                                      })

app.listen(4000, () => {
    console.log('listening')
                       })

