import { Router } from "express";
import todoService from '../services/Todo-Service.js';
import toDoPayloadValidator from "../middleware/validator.js";

var todoRouter = Router();

todoRouter.get("/", async (req, res) => {
    const result = await todoService.getAllTodos();
    res.send(result);
});

todoRouter.get("/:id", async (req, res) => {
    const result = await todoService.getTodoById(req.params.id);
    res.send(result);
});

todoRouter.post("/", async (req, res) => {
    console.log(req.body);
    const result = await todoService.saveTodo(req.body);
    res.send(result);
});

todoRouter.put("/:id", async (req, res) => {
    console.log(req.body);
    const result = await todoService.updateTodo(req.params.id, req.body);
    res.send(result);
});

todoRouter.delete("/:id", async (req, res) => {
    const result = await todoService.deleteTodoById(req.params.id);
    res.send(result);
});

export default todoRouter;