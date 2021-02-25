const {User, Playlist} = require('../models/index')

class UserController {
    static getUser(req, res) {
        User.findAll()
            .then((data) =>{
                res.render('users', {data})
            })
            .catch((err) =>{
                res.send(err)
            })
    }

    static getAddUsers(req, res) {
        User.findAll()
            .then((data) =>{
                res.render('addUser')
            })
            .catch((err) =>{
                res.send(err)
            })
    }

    static postAddUsers(req, res) {

        const newUsers = {
            first_name: req.body.first_name, 
            last_name: req.body.last_name,
            username: ''
        }
        User.create(newUsers)
            .then((data) =>{
                res.redirect('/users')
            })
            .catch((err) =>{
                res.send(err)
            })
    }
}

module.exports = UserController