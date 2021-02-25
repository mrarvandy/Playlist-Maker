const {Playlist} = require('../models/index')

class PlaylistController {
    static getPlaylists(req, res) {
        Playlist.findAll()
            .then((data) =>{
                res.render('playlists', {data})
            })
            .catch((err) =>{
                res.send(err)
            })
    }
}

module.exports = PlaylistController