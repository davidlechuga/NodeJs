const bcrypt = require('../lib/bcrypt')
const User = require('../models/users')

async function create ({name, email, password}){
    const hash = await  bcrypt.hash(password)
    return User.create({name, email, password: hash})
}

function getAll(){
    return User.find()
}

function getById (userID) {
    return User.findById()

}



