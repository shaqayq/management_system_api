// file for load application

require('dotenv').config()
const bootAplication = require('./app');
bootAplication(process.env.APP_PORT)