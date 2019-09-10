const express = require('express');
const app = express();
app.use(express.json()); //aqui estoy llamando la funcion expŕess.json()

const koders = [{
	name: 'Carlos',
	age: 25,
	generation: 4
},{
	name: 'Rurick',
	age: 25,
	generation: 4
},{
	name: 'Mike',
	age: 25,
	generation: 5
}];

app.get('/koders',(resquest, response)=>{
	response.json({
		message: 'Todos los Koders',
		data: {
			koders: koders
		}
	})
});

app.post('/koders',(request, response)=>{
	const newKoder = request.body
	koders.push(newKoder)
	response.json({
		message: 'New Koder added',
		data: {
			koders: koders
		}	
	})
});

app.delete('/koders/:index',(request,response)=>{
	const {index} = request.params
	console.log('index: ', index)
	koders.splice(index,1)
	response.json({
		message: `Koder in ${index} position, deleted`,
		data: {
			koders
		}
	})
});

app.patch('/koders/:index', (request, response)=>{
	const {index} = request.params
	console.log('index:', index)
	const {koder} = request
	koders[index - 1] = {
		...koders[index - 1],//spread o rest operator
		...body
	}
});

app.listen(5000,()=>{
	console.log('Koders API Listening')
});