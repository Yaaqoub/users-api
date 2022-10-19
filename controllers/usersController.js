const { User } = require('./../models');
const UsersService = require('./../services/UsersService');
const usersServices = new UsersService({ User });

const createUser = async function(req, res, next) {

    let createUserProcess = await usersServices.creatUser(req.body);

    return res.status(201).send(createUserProcess);
};

const listUsers = async function(req, res, next) {

    let listUsersProcess = await usersServices.listUsers(req.query);

    return res.status(200).send(listUsersProcess);
};

const updateUsers = async function(req, res, next) {

    let updateUsersProcess = await usersServices.updateUsers(req.params.userId, req.body);

    return res.status(200).send(updateUsersProcess);
};

const deleteUser = async function(req, res, next) {

    let deleteUserProcess = await usersServices.deleteUser(req.params.userId);

    return res.status(200).send(deleteUserProcess);
};

const loginUser = async function(req, res, next) {

    let loginProcess = await usersServices.login(req.body);

    return res.status(200).send(loginProcess);
};

module.exports = {
    createUser,
    listUsers,
    updateUsers,
    deleteUser,
    loginUser
}
