const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js')
const connetDB = require('./db/connect.js')
require('dotenv').config()
//middleware
//app.use(express.static('./public'))
app.use(express.json())


//routes
app.get('/hello', (req, res) => {
    res.send('Welcome')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
    try {
        await connetDB (process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()
