const express = require('express')
const router = express.Router()
const UserController = require('../controllers/usersController')


router.get('/', UserController.getUser)
router.get('/add', UserController.getAddUsers)
router.post('/add', UserController.postAddUsers)

module.exports = router