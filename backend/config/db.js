const mongoose = require('mongoose');

// const connection = mongoose.createConnection('mongodb://localhost:27017/newToDo').on('open', () => {

const connection = mongoose.createConnection('mongodb+srv://anshuman2003:Anshuman2003@diet.eceufso.mongodb.net/Todo').on('open', () => {
    console.log("Mongodb connected");
}).on('error', () => {
    console.log("Mongodb connection failed");
});

module.exports = connection;