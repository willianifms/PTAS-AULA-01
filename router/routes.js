const expess = require('express');
const routes =expess.Router()

const userControler = require('../controller/userController')
routes.get('/user', userControler.selectUsers)
routes.post('/user', userControler.createUser)
routes.delete('/user', userControler.deleteUser)
routes.put('/user', userControler.updateUser)
routes.post('/user/autenticado', userControler.autenticaUser)
module.exports= routes;