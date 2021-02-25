const router = require('express').Router();
const Songs = require('../controllers/songsController.js');

router.get('/add', Songs.addData);
router.post('/add', Songs.postAddedData);
router.get('/', Songs.readData)

module.exports = router;