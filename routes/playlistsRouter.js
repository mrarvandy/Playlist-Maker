const express = require('express')
const router = express.Router()
const PlaylistController = require('../controllers/playlistsController')


router.get('/',  PlaylistController.getPlaylists)    

module.exports = router