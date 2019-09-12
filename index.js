const mongoose = require('mongoose')
const DB_USER = 'davidlechuga'
const DB_PASSWORD = '1Diosasegur'
const DB_HOST = 'cuartagen-xcjjl.mongodb.net'
const DB_NAME = 'Kodemia'

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const KoderSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 20,
		required: true
	//	pattern: /[0-9a-zA-Z]{3,20}$/
	},
	age:{
		type: Number,
		min: 15,
		max:100
	},
	generation:{
		type: Number,
		min: 1,
		required: true
	}
})
​
async function main () {
	const connection = await mongoose.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology:true
	 })
​
	 const Koder = mongoose.model('Koder', KoderSchema)
​
	 const newKoder = new Koder({
		 name: 'Shalem',
		 age: 29,
		 generation: 4
	 })
​
	 await newKoder.save()
	 return newKoder
	}
​
​
main()
	.then(koder => {
		console.log('main finished')
		console.log('koder: ', koder)
		process.exit(0)
		// el 0 significa que el proceso fue sin error
	})
	.catch(error => {
		console.error('error:', error)
	})