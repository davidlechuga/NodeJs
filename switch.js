const htttp = require ('http');


const server = htttp.createServer((request, response)=>{
    const url = request.url
    const method = request.method
    console.log('method: ', method)

/*
    switch(url) {
        case '/hola':  
            response.write('<h1> HOLA MUNDO  </h1>')
            response.write('<div> <img src = "https://alanxelmundo.com/wp-content/uploads/2019/04/biblioteca.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
        
            break
        case '/adios':
            response.write('<h1> ADIOS MUNDO  </h1>')
            response.write('<div> <img src = "http://az778189.vo.msecnd.net/media/fotos/g/8d21d5094c7e3df4d7a4b04a6f727859.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
            break
        default:
            response.write('otra cosa')    

                
    }

    */

    if(url=== '/hola' && method ==='GET') {
        response.write('HOLA GET')
    } else if ( url === '/adios' && method === 'POST') {
        response.write('<h1> ADIOS MUNDO POST  </h1>')
        response.write('<div> <img src = "http://az778189.vo.msecnd.net/media/fotos/g/8d21d5094c7e3df4d7a4b04a6f727859.jpg"  style=" height: 100px; width: 150px;"></img> </div>')

    }else if (url === '/' && method ==='PUT' ) {
        response.write('<h1> HOLA MUNDO PUT </h1>')
        response.write('<div> <img src = "https://alanxelmundo.com/wp-content/uploads/2019/04/biblioteca.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
    } else {
        response.write('we cant response you')
    } 


    response.end()

} ).listen(4000, () =>{
  console.log('listening')
})

