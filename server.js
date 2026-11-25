const express = require('express');

const path = require('path');

const app = express();

//port 
const port = 3000;

//GET request
app.get('/', (req, res) => {

    //response
    res.send(path.join(__dirname, 'public/index.html'));
});