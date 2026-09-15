import React, { useId, useState } from 'react';
import type { Todo } from './types';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import useFetchTodo from "../hooks/useFetchTodo"
import './TodoApp.css';
const testTodos = Array.from({ length: 15000 }, (_, i) => ({
    id: `test-${i}`,
    title: "test",
    completed: false,
}));
function TodoApp() {
    const { data, error, loading } = useFetchTodo('https://jsonplaceholder.typicode.com/todos')

    const [todos, setTodos] = useState<Todo[]>([]);

    React.useEffect(() => {
        if(data?.length) {
            
            const newData = data.map((todo: Todo) => 
                ({
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed
                })
            )
            setTodos([...newData, ...testTodos])
        }
    },[data])

    const handleToggle = (id: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id 
                    ? { ...todo, completed: !todo.completed } 
                    : todo
            )
        );
    };

    const handleDelete = (id: string) => {
        setTodos((prevTodos) => 
            prevTodos.filter(todo => todo.id !== id)
        )
    };


    const handleAdd = (text: string) => {
        const trimmedText = text.trim();
        if (!trimmedText) {
            return;
        };
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: crypto.randomUUID(),
                title:trimmedText,
                completed: false
            }
        ]);
    }

    if(loading) {
        return(
            <div className="todo-state">
                <span>Loading todos...</span>
            </div>
        )
    }
    if (error) {
        return (
            <div className="todo-state">
                <span>Error loading todos: {error.message}</span>
            </div>
        )
    }
    return (
        <div className="todo-app">
            <header className="todo-header">
                <div>
                    <h1>Todo App</h1>
                    <p>Manage your tasks and keep track of your progress.</p>
                </div>
                <span className="todo-count">
                    {todos.length}{" "} 
                    {todos.length === 1 ? 'task' : 'tasks'}
                </span>
            </header>
            <TodoInput onAdd={handleAdd} />
            <TodoList 
                todos={todos} 
                onToggle={handleToggle} 
                onDelete={handleDelete} 
            />
        </div>
    );   
}

export default TodoApp;