const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/create', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you have passed the wrong inputs"
        })
        return;
    }
    //putting it here in mongo db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo created!"
    })
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({}); //here find with no conditions means give me everything
    res.json({
        todos
    })
});

app.put('/completed', async (req, res) => {
    const getPayload = req.body;
    const parseGetPayload = updateTodo.safeParse(getPayload);
    if (!parseGetPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed!"
    })
});

app.listen(3000);