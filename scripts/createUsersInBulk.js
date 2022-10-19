const fake = require('fake-user')
const { User } = require('./../models');
const UsersService = require('./../services/UsersService');
const usersServices = new UsersService({ User });


for (let i = 0; i < 50; i++) {
    let user = fake.get();
    let userObject = {
        firstName: user.GivenName,
        lastName: user.GivenName,
        email: `${user.GivenName}@test.com`,
        password: 'azerty'
    };

    usersServices.creatUser(userObject).catch();
}
