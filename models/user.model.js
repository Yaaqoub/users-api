const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    email : {
        type: String
    },
    password : {
        type: String
    }
}, {
    timestamps: true
});

let userSchema = mongoose.model('User', UserSchema);

module.exports = userSchema;
