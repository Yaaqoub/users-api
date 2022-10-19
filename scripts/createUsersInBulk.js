const fake = require('fake-user')
const { User } = require('./../models');
const UsersService = require('./../services/UsersService');
const usersServices = new UsersService({ User });

/*
// Delete all users
usersServices.listUsers({limit: 100, page: 0}).then((user) => {
    for(let i = 0; i < user.users.length; i ++) {
        usersServices.deleteUser(user.users[i]._id).catch();
    }
});*/

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
