const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const authJwt = require('../middlewares/authJwt');

/**
 * @api {post} /users Create a new user
 * @apiName Create User
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/users', [authJwt.verifyToken], usersController.createUser);

/**
 * @api {get} /users List all users
 * @apiName List Users
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/users', [authJwt.verifyToken],  usersController.listUsers);

/**
 * @api {put} /users/:userId Update a user
 * @apiName Update User
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.put('/users/:userId', [authJwt.verifyToken], usersController.updateUsers);

/**
 * @api {delete} /users/:userId Delete a user
 * @apiName Update User
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.delete('/users/:userId', [authJwt.verifyToken], usersController.deleteUser);

/**
 * @api {post} /login Login a user
 * @apiName Update User
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/login', usersController.loginUser);

module.exports = router;
