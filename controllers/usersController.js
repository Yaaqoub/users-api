const { User } = require('./../models');
const UsersService = require('./../services/UsersService');
const usersServices = new UsersService({ User });

const createUser = async function(req, res, next) {

    let createUserProcess = await usersServices.creatUser(req.body);

    return res.status(200).send(createUserProcess);
};

module.exports = {
    createUser
}
