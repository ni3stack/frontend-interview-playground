import type { Todo } from './types';
type TodoRowProps = {
  todo: Todo,
  index: number,
  onToggle: (id: string) => void,
  onDelete: (id: string) => void
};

function TodoRow({
  todo, 
  index, 
  onToggle, 
  onDelete 
} : TodoRowProps) {

  return (
    <tr className={todo.completed ? "todo-row completed": "todo-row"}>
      <td>{index + 1}</td>
      <td className="todo-title">
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle && onToggle(todo.id)}
          />
          <span>{todo.title}</span>
        </label>
      </td>
      <td>
        <span className={
            todo.completed 
            ? "todo-status completed" : "todo-status active"
        }>
          {todo.completed ? "Completed" : "Active"}
        </span>
      </td>
      <td>
        <button 
          type="button" 
          className="todo-delete-btn"
          onClick={() => onDelete && onDelete(todo.id)}>
            Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoRow;
