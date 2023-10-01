const express = require('express');
const userRouter = require('./routes/user.router');
const todoRouter = require('./routes/todo.router');

const app = express();

app.use(express.json());

app.use('/', userRouter);
app.use('/', todoRouter);



module.exports = app;

