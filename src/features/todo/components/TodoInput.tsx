import React, { useState } from 'react';

type TodoInputProps = {
    onAdd: (text: string) => void;
};

function TodoInput({ onAdd } : TodoInputProps) { 
    const [value, setValue] = useState("")
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedValue = value.trim();
        if (!trimmedValue) {
            return;
        }
        onAdd(trimmedValue);
        setValue("");
    }

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value} 
                placeholder="What needs to be done?" 
                aria-label="Todo title"
                onChange={(e) => setValue(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoInput;