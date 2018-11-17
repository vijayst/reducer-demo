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

    return (
        <div className="app">
            <Form onAdd={handleAdd} />
            <List items={items} />
        </div>
    );
}