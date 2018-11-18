import React, { useState } from 'react';

export default function Form(props) {
    const [value, setValue] = useState('');

    function handleAdd(e) {
        e.preventDefault();
        props.onAdd(value);
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Add Todo" 
                value={value} 
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
        </form>
    );
}