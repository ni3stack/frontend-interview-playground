import TodoRow from './TodoRow';
import type { Todo } from './types';

type TodoListProps = {
    todos: Todo[],
    onToggle: (id: string) => void,
    onDelete: (id: string) => void
};

function TodoList({ todos, onToggle, onDelete } : TodoListProps) {
    if (!todos || todos.length === 0) {
        return (
            <div className="todo-state">
                <h2>No todos available.</h2>
                <span>Add a new task to get started!</span>
            </div>
        );
    }
    return (
        <div className="todo-table-wrapper">
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <TodoRow 
                                key={todo.id} 
                                todo={todo} 
                                index={index}
                                onToggle={onToggle} 
                                onDelete={onDelete} 
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;