/* console.log('Hello, World!');
export {};
 */

/* import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log(req.method);
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
}); */

import express from 'express';

import todoRoutes from './todo';

const app = express();

app.use(express.json());

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});

router.get('/todos/:id', (req: Request, res: Response) => {
    const todoId = parseFloat(req.params.id);
    const todo = getTodo(todoId);   
    res.json({ todo });
});

router.patch('/todos/:id', (req: Request, res: Response) => {   
    const todoId = parseFloat(req.params.id);
    const newText = req.body.text;
    const updatedTodo = updateTodo(todoId, newText);
    res.json({ message: 'Todo updated successfully', todo: updatedTodo });
});

router.delete('/todos/:id', (req: Request, res: Response) => {
    const todoId = parseFloat(req.params.id);
    removeTodo(todoId);
    res.json({ message: 'Todo removed successfully' });
});



app.listen(3000);