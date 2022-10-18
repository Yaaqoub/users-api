class UsersService {

    constructor({ User }) {}

    async creatUser(data) {
        return {
            message: 'Service works',
            data: data
        };
    }
}

module.exports = UsersService;
