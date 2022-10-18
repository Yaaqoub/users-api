const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CompanySchema = new Schema({
    name : {
        type: String
    },
    city : {
        type: String
    }
}, {
    timestamps: true
});

let companySchema = mongoose.model('Company', CompanySchema);

module.exports = companySchema;
