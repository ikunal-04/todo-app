const mongo = require('mongoose');

mongo.connect('your mongo url');

const todoSchema = mongo.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongo.model("todos", todoSchema);

module.exports = {
    todo
}