const htttp = require ('http');


const server = htttp.createServer((request, response)=>{
    const url = request.url

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

    /*
    if(url=== '/hola'){
        response.write('HOLA')
    } else if ( url === '/adios') {
        response.write('<h1> ADIOS MUNDO  </h1>')
        response.write('<div> <img src = "http://az778189.vo.msecnd.net/media/fotos/g/8d21d5094c7e3df4d7a4b04a6f727859.jpg"  style=" height: 100px; width: 150px;"></img> </div>')

    }else{
        response.write('<h1> HOLA MUNDO  </h1>')
        response.write('<div> <img src = "https://alanxelmundo.com/wp-content/uploads/2019/04/biblioteca.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
    }*/
    response.end()

} ).listen(4000, () =>{
  console.log('listening')
})

