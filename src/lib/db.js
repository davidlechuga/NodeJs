const mongoose = require('mongoose')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const uri = `mongodb+srv://davidlechuga:1Diosasegur@cluster0-xcjjl.mongodb.net/test`

module.exports = () => mongoose.connect(
    uri,
  {
    useNewUrlParser:true,
    useUnifiedTopology: true
  }
)
