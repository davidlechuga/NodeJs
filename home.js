const express = require('express');
const app = express();
app.use(express.json()); //aqui estoy llamando la funcion expŕess.json()
const url = request.url
const method = request.method
console.log('method:', method)
console.log('url:', url)



const Koders = [{
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


switch(url) {

    case '/koders':
        if (method === 'GET')
        res.json({
        message: 'Todos los Koders',
        Data: {
            Koders:Koders
        }
    })

    break
    
    case '/koders':
        if (method === POST)
        const newKoder = req.body
        Koders.push(newKoder)
        res.json({
        message: 'Todos los Koders',
        Data: {
            Koders:Koders
        }
    })  

    break

    case ('/koders'):
        if (method === DELETE)
        const {index} = req.params
        console.log('index: ', index)
        Koders.splice(index,1)
        res.json({
		message: `Koder in ${index} position, deleted`,
		Data: {
			Koders
		}
    })

    case ('/koders'):
        if(method === PATCH)
        const {index} = request.params
	    console.log('index:', index)
	    const {Koder} = request
	    Koders[index - 1] = {
		...Koders[index - 1],//spread o rest operator
		...body
	    }

        default: 
        response.write('otra cosa')    

        }

/*
app.get('/koders', (req,res) =>{
    res.json({
        message: 'Todos los Koders',
        Data: {
            Koders:Koders
        }
    })
}); 
  
app.post('/koders', (req, res) => {
    const newKoder = req.body
    Koders.push(newKoder)
    res.json({
        message: 'Todos los Koders',
        Data: {
            Koders:Koders
        }
    })
});

app.delete('/koders/:index', (req,res) => {
    const {index} = req.params
    console.log('index: ', index)
    Koders.splice(index,1)
    res.json({
		message: `Koder in ${index} position, deleted`,
		Data: {
			Koders
		}
})
})

app.patch('/koders/:index', (request, response)=>{
	const {index} = request.params
	console.log('index:', index)
	const {Koder} = request
	Koders[index - 1] = {
		...Koders[index - 1],//spread o rest operator
		...body
	}
});
*/



app.listen(8888, () => {
    console.log('listening')
})
