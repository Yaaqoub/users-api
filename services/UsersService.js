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

    async listUsers() {
        let _users = await this.userModel.find().exec();

        return {
            users: _users
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
}

module.exports = UsersService;
