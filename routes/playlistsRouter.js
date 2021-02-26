const express = require('express')
const router = express.Router()
const PlaylistController = require('../controllers/playlistsController')

router.get('/', PlaylistController.getPlaylists)
router.get('/add/:id', PlaylistController.addPlaylists)
router.post('/add/:id', PlaylistController.postAddedPlaylists)
router.get('/addsongs/:id', PlaylistController.addSongToPlaylists)
router.post('/addsongs/:id', PlaylistController.postAddedSongToPlaylists)

module.exports = router