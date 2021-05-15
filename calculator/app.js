
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    // sending html page on home directory
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res) => {
    // console.log(req.body);

    let num1 = (Number)(req.body.number1);
    let num2 = (Number)(req.body.number2);

    res.send(`sum of the numbers is: ${num1+num2}`);
})

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
})
app.post("/bmicalculator", (req,res) => {
    let wt = (parseFloat)(req.body.weight);
    let ht = (parseFloat)(req.body.height);
    let bmi = (wt)/(ht*ht) ;

    res.send(`BMI of your body is: ${bmi}`);
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
})