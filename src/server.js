
const express = require('express')
const router = require('./routers/posts')

const app = express();
app.use(express.json())

app.use('/posts', router)

app.get('/', (req, res) => {
	res.json({
		message: "hola koder "
	})
})

module.exports= app