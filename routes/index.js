const express = require('express')
const router = express.Router()
const usersRouter = require('./usersRouter')
const playlistsRouter = require('./playlistsRouter')


router.get('/', (req, res) =>{
    res.render('home')
})

router.use('/', usersRouter)
router.use('/', playlistsRouter)

module.exports = router