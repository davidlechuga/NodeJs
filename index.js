const express = require ('express');
const app = express();
app.use(express.json())

const koders = [{
    name: 'Carlos',
    age: '25',
    generation: 4
                },
                {
    name: 'DAVID',
    age: '24',
    generation: 4
                },  
                ]

app.get('/Koders', (req, res) => {
    res.json ({
        message: 'todos los koders GET',
        data: {
            koders: koders
                                }
                                })
                                })

app.post('/Koders', (req, res) => {
        

   

                                  }) 
    
    


app.listen(5000, () => {
    console.log('listening')
})