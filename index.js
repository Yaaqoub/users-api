const config = require('./config.js');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');
const pe = require('parse-error');
const rateLimit = require('express-rate-limit');

const app = express();
const port = config.PORT;

app.use(logger('dev'));
app.use(express.json({limit: '800mb'}));
app.use(express.urlencoded({
    extended: false,
    limit: '800mb'
}));

// CORS
app.options("*", cors());
app.use(cors());

// Rate limit
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 50,
        message: 'You exceeded 50 request in 15 minutes!!',
        headers: true
    })
);

app.get('/', (req, res) => {
    res.json({
        version: config.API_VERSION,
        status: true
    });
});

// Routes
const users = require('./routes/users');
const companies = require('./routes/companies');

app.use('/v1', [users, companies]);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    let errorMessage = {};
    errorMessage.message = err.message;
    errorMessage.error = req.app.get('env') === 'development' ? err : {};

    errorMessage.status = err.status || 500;

    res.json(errorMessage);
});

app.listen(port, () => {
    console.log(`Server is starting on port ${port} - ${config.NODE_ENV} mode.`);
});

// Important because it prevents nodejs app from crashing
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});
