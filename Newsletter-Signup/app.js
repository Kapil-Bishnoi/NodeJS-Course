
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/frontend/signup.html');
})

app.post('/', (req,res) => {
    const userData = {
        fullName: req.body.fullName,
        email: req.body.email
    };
    console.log(userData);
    res.end();
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})