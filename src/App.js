import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import './app.css';

let i = 1;

export default function App(props) {
    let [items, setItems] = useState([]);

    function handleAdd(text) {
        items = items.slice();
        items.push({
            id: i++,
            text
        });
        setItems(items);
    }

    function handleDelete(id) {
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items = items.slice();
            items.splice(index, 1);
            setItems(items);
        }
    }

    return (
        <div className="app">
            <Form onAdd={handleAdd} />
            <List items={items} onDelete={handleDelete} />
        </div>
    );
}