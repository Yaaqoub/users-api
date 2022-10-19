const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = bcrypt.hashSync(this.password, 8);
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (pw) {
    return bcrypt.compareSync(pw, this.password);
};

UserSchema.methods.getJWT = function () {
    return jwt.sign({ id: this._id.toString() }, tokenSecret, {
        expiresIn: '1h'
    });
};

UserSchema.methods.toClient = function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
    };
};

let userSchema = mongoose.model('User', UserSchema);

module.exports = userSchema;
