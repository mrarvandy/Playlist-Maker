const {Playlist, User, Song, PlaylistSong} = require('../models/index')

class PlaylistController {
    static getPlaylists(req, res) {
        Playlist.findAll({
            include: [User, Song]
        })
            .then((data) =>{
                res.render('playlists', {data})
            })
            .catch((err) =>{
                res.send(err)
            })
    }

    static addPlaylists(req, res) {
        res.render('add-playlist')
    }

    static postAddedPlaylists(req, res) {
        Playlist.create({
            UserId: req.params.id,
            title: req.body.title
        })
            .then(() => {
                res.redirect('/playlists')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static addSongToPlaylists(req, res) {
        Song.findAll()
            .then((data) => {
                res.render('add-song-to-playlist', {data})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static postAddedSongToPlaylists(req, res) {
        PlaylistSong.create({
            PlaylistId: req.params.id,
            SongId: req.body.song
        })
            .then(() => {
                res.redirect('/playlists')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = PlaylistController