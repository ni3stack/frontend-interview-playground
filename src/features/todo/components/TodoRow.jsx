const TodoRow = ({ todo, onToggle, onDelete }) => {
  if (!todo) {
    return null;
  }

  return (
    <li className="todo-row">
        <label>
            <input type="checkbox" checked={todo.completed}
                onChange={() => onToggle && onToggle(todo.id)} />
            <span className={todo.completed ? 'completed': ''}>{todo.title}</span> 
        </label>
        <button type="button" onClick={() => onDelete && onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoRow;
