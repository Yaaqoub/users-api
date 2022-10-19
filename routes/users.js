const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const authJwt = require('../middlewares/authJwt');

router.post('/users', [authJwt.verifyToken], usersController.createUser);

router.get('/users', [authJwt.verifyToken],  usersController.listUsers);

router.put('/users/:userId', [authJwt.verifyToken], usersController.updateUsers);

router.delete('/users/:userId', [authJwt.verifyToken], usersController.deleteUser);

router.post('/login', usersController.loginUser);

module.exports = router;
