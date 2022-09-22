require('dotenv').config();
const express = require('express');
const path = require('path');

const start = async function() {
    const app = express();
    app.use('/', express.static(path.join(__dirname, 'static')));

    const port = process.env.PORT || 3000;
    app.listen(port, function() {
        console.log(`Server listening on port ${port}`);
    })
};

start();
