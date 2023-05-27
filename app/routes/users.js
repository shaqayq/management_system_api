const express = require('express')
const router = express.Router()
const userListsController = require('../controllers/userController')

router.get('/' , userListsController.userAdd)
router.post('/newUser' , userListsController.userAdd)
module.exports= router