
// const express = require('express');
const mongoose = require('mongoose');

// const app = express();

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFruit: fruitSchema
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: "7.5",
//     review: "Sometimes its very delicious hahahha!"
// })

// fruit.save();

// const fruit1 = new Fruit({
//     name: "Banana",
//     rating: "9",
//     review: "Awwwwwwwessome!"
// })
// const fruit2 = new Fruit({
//     name: "Kiwi",
//     rating: "6",
//     review: "Soooooo yummy!"
// })

// const person = new Person({
//     name: "John",
//     age: 22
// })

// const person1 = new Person({
//     name: "Kapil",
//     age: 20
// })
// const person2 = new Person({
//     name: "Yash",
//     age: 12
// })

// person.save();

// Fruit.insertMany([fruit1, fruit2], (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully saved to fruits collection!");
//     }
// })

// Person.insertMany([person1, person2], (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully saved to people collection!");
//     }
// })

const johnsFruit = new Fruit({
    name: "Pinapple",
    rating: 9,
    review: "Its really really tasty!"
})

// johnsFruit.save();

// Person.updateOne({name: "John"}, {favoriteFruit: johnsFruit}, (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfuly assigned the favorite fruit of john!");
//     }
// })

Fruit.find((err,fruits) => {
    if(err){
        console.log(err);
    } else{
        console.log(fruits);
        // mongoose.connection.close();
        // fruits.forEach((fruit) => {
        //     console.log(fruit.name);
        // })
    }
})

Person.find((err,data) => {
    if(err){
        console.log(err);
    } else{
        console.log(data);
        mongoose.connection.close();
    }
})

// Fruit.deleteOne({_id: "609bbfd099a6cd01a0704556"}, (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully deleted!");
//     }
// })

// Fruit.deleteOne({_id: "609bbfd099a6cd01a0704557"}, (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully deleted!");
//     }
// })

// app.listen(3000,() => {
//     console.log("server is listening on port 3000...");
// })

