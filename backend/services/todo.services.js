const ToDoModel = require("../model/todo.model");


class ToDoServices {

    static async createTodo(userId, title, description) {
        const createTodo = new ToDoModel({ userId, title, description });
        return await createTodo.save();
    }

    static async getTodoData(userId) {
        const todoData = await ToDoModel.find({ userId });
        return todoData;
    }

    static async deleteTodo(id) {
        const deleted = await ToDoModel.findByIdAndDelete({ _id: id })
        return deleted;
    }
}

module.exports = ToDoServices;