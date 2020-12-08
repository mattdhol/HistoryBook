var router = require("express").Router();
let usersCtrl = require("../../controllers/users");
let auth = require("../../config/auth");

// router.get('/set-user', userController.createUser)
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

router.post("/booksave", usersCtrl.booksave);
router.get("/bookget", auth, usersCtrl.bookget);

module.exports = router;
