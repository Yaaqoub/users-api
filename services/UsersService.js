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
}

module.exports = UsersService;
