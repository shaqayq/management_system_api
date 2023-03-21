const express = require('express')
const router = express.Router()
const userListsController = require('../controllers/userController')

router.get('/' , userListsController.userList)

module.exports= router