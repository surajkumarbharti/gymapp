const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/userController.js")


router.post('/userresistor', UserController.createUser)
router.post('/userlogin',UserController.loginUser)
router.get('/alluser',UserController.getAllUser)



module.exports = router;