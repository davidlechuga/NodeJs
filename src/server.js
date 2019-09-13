
const express = require('express')

const app = express();


app.get('/', (req, res) => {
	res.json({
		message: "hola koder "
	})
})

module.exports= app