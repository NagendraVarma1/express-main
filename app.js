const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the Middleware');
    next();
})

app.use((req, res, next) => {
    console.log('In the second middleware');
    res.send('<h1>Welcome to Express js</h1>')
})

app.listen(3000);