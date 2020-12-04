var router = require("express").Router();
let usersCtrl = require('../../controllers/users')

// router.get('/set-user', userController.createUser)
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router