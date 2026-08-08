import TodoRow from './TodoRow';

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos?.map(todo => (
                <TodoRow key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />   
            ))}
        </ul>
    );
}

export default TodoList;