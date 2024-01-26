const mongo = require('mongoose');

mongo.connect('mongodb+srv://admin:BUE47mpQw39ArzHS@cluster0.rfvwuob.mongodb.net/todos');

const todoSchema = mongo.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongo.model("todos", todoSchema);

module.exports = {
    todo
}