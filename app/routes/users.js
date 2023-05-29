const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
router.use(bodyParser.json());
const userListsController = require('../controllers/userController')
const auth = require('../middlewares/auth')

router.get('/' , userListsController.userList)
router.post('/newUser' , userListsController.userAdd)
router.get('/FilterItem' , userListsController.FilterColumn)
router.get('/:id' , userListsController.findById)
router.delete('/:id' , userListsController.deleteById)
router.patch('/:id',userListsController.updateUser)
module.exports= router