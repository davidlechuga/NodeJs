const express = require ('express')

const user = require ('../usecases/user')

const router = express.Router()

router.get('/', async (req,res) => {
    try {
        const allUsers = await user.getAll()
        response.json({
            sucess: true,
            message: 'all Users',
            data: allUsers
        })
    }
    catch(error){
        response.json({
            sucess: false,
            message: ' something is wrong'
        })
    }
})
