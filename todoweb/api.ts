import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async ():Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask):Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = res.json();
    return newTodo;
}

export const editTodo = async (todo: ITask):Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = res.json();
    return newTodo;
}

export const deleteTodo = async (id: string):Promise<void> => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    })
}

export const editDoneTodo = async (todo: ITask):Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = res.json();
    return newTodo;
}
