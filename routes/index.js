const express = require('express')
const router = express.Router()
const usersRouter = require('./usersRouter')
const playlistsRouter = require('./playlistsRouter')
const songsRouter = require('./songsRouter')


router.get('/', (req, res) =>{
    res.render('home')
})

router.use('/users', usersRouter)
router.use('/playlists', playlistsRouter)
router.use('/songs', songsRouter)

module.exports = router