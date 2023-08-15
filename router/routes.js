const expess = require('express');
const routes =expess.Router()

const userControler = require('../controller/userController')
routes.get('./user', userControler.selectUsers)
routes.post('./user', userControler.createUser)
routes.post('/user/autenticado', userControler.autenticaUser)
module.exports= routes;