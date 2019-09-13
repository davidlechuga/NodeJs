const server = require ('./src/server')
const dbConnect = require('./src/lib/db')





const listenServer = function(){
	return new Promise ((resolve, reject) =>{
		server.listen(8080,()=>{
			console.log('server listening ')
		})
	})
}

async function main () {
	await dbConnect()
	console.log('DB CONNECTED')
	await listenServer()
	console.log('SERVER LISTENING')

}

main ()
.then(() =>{
	console.log('api ready')
})
.catch((error)=>{
	console.error(error)
})