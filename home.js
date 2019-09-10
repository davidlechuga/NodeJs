const express = require('express');
const app = express();



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

app.get('/koders', (req,res) =>{
    res.json({
        message: 'Todos los Koders',
        Data: {
            Koders:Koders
        }
    })
})




app.listen(8888, () => {
    console.log('listening')
})