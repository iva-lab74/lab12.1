const express = require('express');

const path = require('path');

const app = express();

//port 
const port = 3000;

//GET request
app.get('/', (req, res) => {

    //response
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
//second GET
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

//listen for upcoming reqquests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});