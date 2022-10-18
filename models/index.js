const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const mongoose = require('mongoose');

const databaseHost = 'localhost';
const databasePort = '27017';
const databaseName = 'users-api-db';

const mongo_connection_string = `mongodb://${databaseHost}:${databasePort}/${databaseName}`;

const models = {};

fs.readdirSync(__dirname)

    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })

    .forEach((file) => {
        const _model = require('./' + file);
        models[_model.modelName] = _model;
    });

mongoose.Promise = global.Promise; // Set mongo to use promises

mongoose.connect(mongo_connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
}).catch((err) => {
    console.log(`Can not connect to Mongo server: ${mongo_connection_string}`);
});

let db = mongoose.connection;
module.exports = db;

db.once('open', () => {
    console.log(`Connected to mongo at: ${mongo_connection_string}`);
});

db.on('error', (error) => {
    console.log('error', error);
});

module.exports = models;
