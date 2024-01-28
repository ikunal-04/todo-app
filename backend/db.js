const mongo = require('mongoose');
require("dotenv").config();

mongo.connect(process.env.MONGO_URL);

const todoSchema = mongo.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongo.model("todos", todoSchema);

module.exports = {
    todo
}