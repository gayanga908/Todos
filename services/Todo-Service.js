// import client from "../configurations/mongo.js";
import pkg from 'mongodb';
const { ObjectId } = pkg;
import test from "../model/test.js";
import Todo from '../model/todo.js';

class TodoService {
    constructor() {
        //super();
        //this.db = client.db('todos');
    };

    getAllTodos = async () => {
        let res = await Todo.find();
        return res;
    }

    getTodoById = async (id) => {
        return await Todo.find({ "_id": new ObjectId(id) });
    }

    saveTodo = async (payload) => {
        let todo = new Todo();
        todo.title = payload.title;
        todo.active = payload.active;
        return await todo.save();
    }

    updateTodo = async (id, payload) => {
        let title = payload.title;
        let active = payload.active;
        let endDate = payload.endDate
        return await Todo.updateOne(
            { "_id": new ObjectId(id) },
            {
                title,
                active,
                endDate
            }
        );
    }

    deleteTodoById = async (id) => {
        return await Todo.deleteOne({ "_id": new ObjectId(id) });
    }
}

const todoService = new TodoService();
Object.freeze(todoService);
export default todoService;
