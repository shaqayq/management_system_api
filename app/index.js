//File for arrange a programm components like Routs,Middelwar,...

const express = require('express');
const app = express()

require('./middlewares')(app)

module.exports = (port) => {
    app.listen(port,()=>{
        console.log(`app is running on port: ${port} `);
    })
}
