const express = require('express')
const router = express.Router()
const userListsController = require('../controllers/userController')

router.get('/' , userListsController.userList)
router.get('/newUser' , userListsController.userAdd)
module.exports= router