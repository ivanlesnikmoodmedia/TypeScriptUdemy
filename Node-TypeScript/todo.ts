import express, {Request, Response} from 'express';
import { addTodo } from './data';

enum TODO_TYPE {
    PERSONAL = 'PERSONAL',
    WORK = 'WORK',
    OTHER = 'OTHER'
}

const router = express.Router();

router.post('/todos', (req, res) => {
    const text = req.body.text;

    const addedTodo = addTodo(text);

    res.json({ message: 'Todo added successfully', todo: addedTodo });
});

router.get('/todos', (req: Request, res: Response) => {
    const todos = getTodos();
    res.json({ todos });
});

router.get('/todos/:id', (req: Request, res: Response) => {
    const todoId = parseFloat(req.params.id);
    const todo = getTodo(todoId);   
    res.json({ todo });
});

export default router;




