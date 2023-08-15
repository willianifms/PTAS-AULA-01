const express = require('express');
const connectionDataBase = require('./config/connection');
const routes = require('./router/routes')
const app = express();
const port = 3003;

app.use(express.json(), routes);
app.get('/', (req,res) => res.send("api-user"))


app.listen(port, () => { console.log(`Run server...${port}`) });

