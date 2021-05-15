const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req,res) => {
    let city = req.body.cityName;
    let apiKey = "5588911db89e7b9c079d5685affe1fca";
    let unit = "matric";
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
//api.openweathermap.org/data/2.5/weather?q=London&appid=5588911db89e7b9c079d5685affe1fca&units=matric
    https.get(url, (response) => {

    })
})

app.listen(3000, () => {
    console.log("Server is listening on 3000...");
})