import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';
import useFetchTodo from "./useFetchTodo"
import './Todo.css';

function TodoApp() {
    const { data, error, loading } = useFetchTodo('https://jsonplaceholder.typicode.com/todos')
    const [todos, setTodos] = React.useState([]);
    const [filter, setFilter] = React.useState('all');

    React.useEffect(() => {
        if(data?.length) {
            setTodos(
                data.slice(0,15).map(todo => 
                    ({
                        id: todo.id,
                        title: todo.title,
                        completed: todo.completed
                    })
                )
            )
        }
    },[data])

    const filteredTodos = React.useMemo(() => {
        switch(filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    },[filter, todos])

    const handleToggle = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id) => {
        setTodos((prevTodos) => 
            prevTodos.filter(todo => todo.id !== id)
        )
    };

    const onFilterChange = (filter) => {
        // Implement filter logic here
        console.log('Filter changed to:', filter);
        setFilter(filter);
    };

    const handleAdd = (text) => {
        if(text) {
            setTodos(prevTodos => [
                ...prevTodos,
                {
                    id: prevTodos.length+1,
                    title:text,
                    completed: false
                }
            ]);
        }
    }

    if(loading) {
        return(
            <span>Loading...</span>
        )
    }

    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput onAdd={handleAdd} />
            <TodoFilter filter={filter} onFilterChange={onFilterChange} />
            <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
    );   
}

export default TodoApp;