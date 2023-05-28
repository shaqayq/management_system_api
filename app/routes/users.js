const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
router.use(bodyParser.json());
const userListsController = require('../controllers/userController')

router.get('/' , userListsController.userList)
router.post('/newUser' , userListsController.userAdd)
module.exports= router