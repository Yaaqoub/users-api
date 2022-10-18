const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        version: 'v1.0.0',
        status: true
    });
});

// Routes
const users = require('./routes/users');

app.use('/v1', [users]);

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
