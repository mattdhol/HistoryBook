var router = require("express").Router();
let userController = require('../controllers/user')

router.get('/set-user', userController.createUser)
// router.post('/signup', usersCtrl.signup);

module.exports = router