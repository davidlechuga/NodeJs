const htttp = require ('http');


htttp.createServer((request, response)=>{
  console.log('url:', request.url)
  /*console.log('request:', request)*/
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write('<h1> hola mundo  </h1>')
  response.write('<div> <img src = "https://alanxelmundo.com/wp-content/uploads/2019/04/biblioteca.jpg"  style=" height: 100px; width: 150px;"></img> </div>')
  response.end()

} ).listen(4000, () =>{
  console.log('listening')
})

