interface Todo {
    id: number;
    text: string;
}

const TODOS: Todo[] = [];

export function addTodo(text: string) {
    const newTodo = { id: Math.random(), text };
    TODOS.push(newTodo);
    return newTodo;
}

export function getTodo(id: number) {
    return TODOS.find(todo => todo.id === id);
    if (!todo) {
        return new Error('Todo not found');
    }
    return todo;
}

export function removeTodo(id: number) {
    TODOS = TODOS.filter(todo => todo.id !== id);
}

export function updateTodo(id: number, newText: string) {
    const todo = getTodo(id);
    todo.text = newText;
    if (todo) {
        todo.text = newText;
    }
}