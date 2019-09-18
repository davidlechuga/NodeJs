const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: false
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 180,
        pattern: /^.+@.+\..+$/,
        required: true
    },
    password: {
        type: String,
        minlength: 10,
        maxlength: 200,
        required: true
    }

})

mondule.export = mongoose.model('Users', userSchema)