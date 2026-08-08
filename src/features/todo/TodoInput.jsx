import { useState } from "react";

function TodoInput({ onAdd }) { 
    const [todoInput, setTodo] = useState("")
    return (
        <div>
            <input type="text" 
                value={todoInput} 
                placeholder="Enter a new todo" 
                onChange={(e) => setTodo(e.target.value)} />
            <button type="button" onClick={() => {
                if (!todoInput.trim()) return;
                onAdd(todoInput)
                setTodo("");
            }}
            >Add</button>
        </div>
    );
}

export default TodoInput;