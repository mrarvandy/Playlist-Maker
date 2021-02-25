const express = require('express')
const router = express.Router()
const UserController = require('../controllers/usersController')


router.get('/users', UserController.getUser)

router.get('/users/add', UserController.getAddUsers)

router.post('/users/add', UserController.postAddUsers)

module.exports = router