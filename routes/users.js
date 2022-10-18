const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.post('/users', usersController.createUser);

router.get('/users', usersController.listUsers);

module.exports = router;