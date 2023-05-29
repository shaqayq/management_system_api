const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
const sessionController = require('../controllers/sessionController')
router.use(bodyParser.json());

router.post('/newAuth' , sessionController.newSession)

module.exports= router