const express = require('express');
const connectionDataBase = require('./config/connection');
const userController = require('./controller/userController');
const app = express();
const port = 3003;

app.use(express.json());

app.listen(port, () => { console.log(`Run server...${port}`) });

app.post('/user', userController.createUser);

app.get('/', userController.selectUsers);
