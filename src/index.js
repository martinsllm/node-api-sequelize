const express = require('express');

const app = express();

app.use(express.json());

app.use(require('./routes'));


app.listen(8080, () => {
    console.log('The server is running');
})