
const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("<h1>Happy Mother's Day!</h1>");
})

app.get('/contact', (req,res) => {
    res.send("<h1>Conatct me at <a href='kapil992000@gmail.com'>kapil992000@gmail.com</a> </h1>")
})

app.get('/hobbies', (req,res) => {
    res.send("coding and movies!"); 
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
});