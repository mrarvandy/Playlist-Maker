const {Song, Country} = require('../models/index.js');

class SongController {
    static addData (req, res) {
        Country.findAll({})
            .then((data) => {
                res.render('add-song', {data});
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static postAddedData (req, res) {
        Song.create({
            title: req.body.title,
            artist: req.body.artist,
            embeddedCodeURL: req.body.url,
            duration: req.body.duration,
            released_year: req.body.released_year,
            CountryId: req.body.country
        })
            .then(() => {
                res.redirect(`/songs/add?GreatSucess=100`);
            })
            .catch((err) => {
                res.redirect(`/songs/add?err=${err}`);
            })
    }

    static readData (req, res) {
        Song.findAll({include: Country})
            .then((data) => {
                res.render('see-song', {data});
            })
            .catch((err) => {
                res.send(err);
            })
    }
}

module.exports = SongController;