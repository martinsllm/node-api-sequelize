const express = require('express');

const app = express();

require('./db/connection');

app.listen(8080, () => {
    console.log('The server is running');
})