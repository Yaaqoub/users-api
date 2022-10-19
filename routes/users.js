const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.post('/users', usersController.createUser);

router.get('/users', usersController.listUsers);

router.put('/users/:userId', usersController.updateUsers);

router.delete('/users/:userId', usersController.deleteUser);

router.post('/login', usersController.loginUser);

module.exports = router;
