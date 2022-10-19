class UsersService {

    constructor({ User }) {
        this.userModel = User;
    }

    async creatUser(data) {
        // Check if user exists
        let _user = await this.userModel.findOne({
            email: data.email
        });

        if (_user) {
            return {
                message: 'Failed! Email already in use!'
            };
        } else {
            _user = new this.userModel(data);
            await _user.save();

            return {
                message: `User (${data.email}) created successfully!`
            };
        }
    }

    async listUsers(paginationData) {
        let usersList = [];
        let limit = paginationData.limit || 10;
        let page = paginationData.page || 0;

        let searchQuery = {};

        if (paginationData.name) {
            searchQuery = {
                firstName: paginationData.name
            };
        }

        let _users = await this.userModel.find(searchQuery)
            .limit(limit)
            .skip(limit * page);

        for (let i = 0; i < _users.length; i++) {
            usersList.push(_users[i].toClient());
        }

        return {
            count: _users.length,
            users: usersList
        };
    }

    async updateUsers (userId, data) {
        // Check if user exists
        let _user = await this.userModel.findById(userId).exec();

        if (_user) {
            _user.firstName = data.firstName ? data.firstName : _user.firstName;
            _user.lastName = data.lastName ? data.lastName : _user.lastName;
            _user.password = data.password ? data.password : _user.password;

            _user = await _user.save();

            return {
                message: 'User Updated Successfully!',
                user: _user
            };
        } else {
            return {
                message: 'Failed! User Not Found!'
            };
        }
    }

    async deleteUser(userId) {
        await this.userModel.findByIdAndRemove(userId);

        return {
            message: 'User Deleted Successfully!'
        };
    }

    async login(data) {
        if (data.email && data.password) {
            let _user = await this.userModel.findOne({
                email: data.email
            }).exec();

            if (_user) {
                let isPwdValid = _user.comparePassword(data.password);

                if (isPwdValid) {
                    return {
                        data: _user,
                        token: _user.getJWT()
                    };
                } else {
                    return {
                        message: 'Password is not valid!'
                    };
                }
            } else {
                return {
                    message: 'User Not Found!'
                };
            }
        } else {
            return {
                message: 'Missing Data!!'
            };
        }
    }
}

module.exports = UsersService;
